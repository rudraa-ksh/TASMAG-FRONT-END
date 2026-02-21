import { useNavigate } from "react-router-dom"
import Auth from "../../components/layout/Auth.jsx"
import Header from "../../components/layout/Header.jsx"
import Progress from "../../components/common/progress/Progress.jsx"
import Button from "../../components/common/buttons/Button.jsx"
import style from "./Study.module.scss"


export default function Study(){
    const navigate = useNavigate()

    const handleSelect = (studyType) => {
        navigate("/schedule", { state: { studyType } })
    }

    const handleSkip = () => {
        navigate("/dashboard")
    }

    return(
        <Auth>
            <Header title="Great!" subtitle="Tell us where you study" />

            <div className={style.select}>
                <div className={style.option} onClick={() => handleSelect("School")}>
                    <img src="src/assets/gif/student.gif" alt="School" />
                    <p>School</p>
                </div>
                <div className={style.option} onClick={() => handleSelect("College")}>
                    <img src="src/assets/gif/graduation.gif" alt="College" />
                    <p>College</p>
                </div>
            </div>

            <Button content="Skip" onClick={handleSkip} />

            <Progress status3={"active"}/>

            <div className={`${style.corner} ${style.green}`}></div>
            <div className={`${style.corner} ${style.yellow}`}></div>
        </Auth>
    )
}