import { useState, useRef } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import axios from "axios"
import { GoogleGenAI } from "@google/genai"
import style from "./Schedule.module.scss"
import Auth from "../../components/layout/Auth.jsx"
import Header from "../../components/layout/Header.jsx"
import Button from "../../components/common/buttons/Button.jsx"
import Progress from "../../components/common/progress/Progress.jsx"
import uploadIcon from "../../assets/images/Image Upload.svg"

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_KEY })

export default function Schedule() {
    const location = useLocation()
    const navigate = useNavigate()
    const { studentType } = location.state || {}

    const [phase, setPhase] = useState("upload")   // "upload" | "processing" | "review"
    const [scheduleData, setScheduleData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const fileInputRef = useRef(null)

    const handleUploadClick = () => {
        fileInputRef.current?.click()
    }

    const fileToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.onload = () => resolve(reader.result.split(",")[1])
            reader.onerror = reject
            reader.readAsDataURL(file)
        })
    }

    const handleFileChange = async (e) => {
        const file = e.target.files?.[0]
        if (!file) return

        setPhase("processing")
        setError(null)

        try {
            const base64Data = await fileToBase64(file)

            const response = await ai.models.generateContent({
                model: "gemini-2.5-flash",
                contents: [
                    {
                        role: "user",
                        parts: [
                            { text: "Give day-wise unique subjects from this timetable in JSON. Return ONLY valid JSON with no markdown formatting. Use format: { \"Monday\": [\"Subject1\", \"Subject2\"], \"Tuesday\": [...], ... }" },
                            {
                                inlineData: {
                                    mimeType: file.type,
                                    data: base64Data,
                                },
                            },
                        ],
                    },
                ],
            })

            const text = response.text
            // Extract JSON from the response (handle possible markdown code blocks)
            let jsonStr = text
            const jsonMatch = text.match(/```(?:json)?\s*([\s\S]*?)```/)
            if (jsonMatch) {
                jsonStr = jsonMatch[1].trim()
            }

            const parsed = JSON.parse(jsonStr)
            setScheduleData(parsed)
            setPhase("review")
        } catch (err) {
            console.error("Gemini API error:", err)
            setError("Failed to process timetable. Please try again.")
            setPhase("upload")
        }
    }

    const handleConfirm = async () => {
        setError(null)
        setLoading(true)
        try {
            const token = localStorage.getItem("token")
            await axios.put(
                "http://localhost:5000/api/users/profile",
                { studentType, schedule: scheduleData },
                { headers: { Authorization: `Bearer ${token}` } }
            )
            navigate("/dashboard")
        } catch (err) {
            setError(err.response?.data?.message || "Failed to save schedule. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    // Find the max number of subjects any day has (for column count)
    const days = scheduleData ? Object.keys(scheduleData) : []
    const maxSubjects = scheduleData
        ? Math.max(...Object.values(scheduleData).map((s) => (Array.isArray(s) ? s.length : 0)))
        : 0

    return (
        <Auth>
            {phase === "review" ? (
                <Header
                    title="Make sure your schedule is accurate."
                    subtitle="Update if necessary."
                />
            ) : (
                <Header
                    title="Upload Schedule"
                    subtitle="Stay organized effortlessly!"
                />
            )}

            {phase === "upload" && (
                <div className={style.uploadArea} onClick={handleUploadClick}>
                    <img src={uploadIcon} alt="Upload your timetable" />
                    <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        className={style.hiddenInput}
                    />
                </div>
            )}

            {phase === "processing" && (
                <div className={style.shimmer}>
                    <img src={uploadIcon} alt="Processing..." />
                </div>
            )}

            {phase === "review" && scheduleData && (
                <div className={style.scheduleTable}>
                    <table className={style.table}>
                        <tbody>
                            {days.map((day) => {
                                const subjects = Array.isArray(scheduleData[day]) ? scheduleData[day] : []
                                return (
                                    <tr key={day}>
                                        <td className={style.dayCell}>{day}</td>
                                        {subjects.map((subject, idx) => (
                                            <td key={idx}>
                                                <input
                                                    type="text"
                                                    className={style.subjectInput}
                                                    value={subject}
                                                    onChange={(e) => {
                                                        const updated = { ...scheduleData }
                                                        updated[day] = [...updated[day]]
                                                        updated[day][idx] = e.target.value
                                                        setScheduleData(updated)
                                                    }}
                                                />
                                            </td>
                                        ))}
                                        {/* Fill empty cells if this day has fewer subjects */}
                                        {Array.from({ length: maxSubjects - subjects.length }).map((_, idx) => (
                                            <td key={`empty-${idx}`}></td>
                                        ))}
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            )}

            {error && <p className={style.errorMsg}>{error}</p>}

            <Button
                content={loading ? "Saving..." : phase === "review" ? "Confirm" : "Skip"}
                margin="inc"
                onClick={phase === "review" ? handleConfirm : () => navigate("/dashboard")}
            />

            <Progress status3="active" />
        </Auth>
    )
}