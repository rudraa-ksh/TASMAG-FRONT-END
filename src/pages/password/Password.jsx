import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Auth from "../../components/layout/Auth.jsx"
import Button from "../../components/common/buttons/Button.jsx"
import Input from "../../components/common/input/Input.jsx"
import Header from "../../components/layout/Header.jsx";
import Rounded from "../../components/common/rounded/Rounded.jsx";
import style from "./Password.module.scss"
import Progress from "../../components/common/progress/Progress.jsx";

export default function Password() {
    const navigate = useNavigate();
    const location = useLocation();
    const { name, email } = location.state || {};

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!password || !confirmPassword) {
            setError("Please fill in all fields");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }

        try {
            setLoading(true);
            const res = await axios.post("http://localhost:5000/api/auth/register", {
                name,
                email,
                password,
            });
            localStorage.setItem("token", res.data.token);
            navigate("/study"); // change to your actual next route
        } catch (err) {
            setError(err.response?.data?.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Auth status2={"active"}>
            <Header title="Create Password" subtitle={<>Make it strong.<br/>Like a Wi-Fi signal on a good day</>}/>

            <div className={style.avatar_area}>
                <Rounded name="key"/>
            </div>

            <form className={style.form} onSubmit={handleSubmit}>
                <Input
                    label={"Password:"}
                    placeholder={"Enter your password"}
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <div className={style.instructions}>
                    <h4>Instructions:</h4>
                    <ul>
                        <li>Password must be 8 characters long.</li>
                        <li>Use a mix of letters, numbers and special characters.</li>
                    </ul>
                </div>

                <Input
                    type="password"
                    label={"Re-Enter Password:"}
                    placeholder={"Re-enter your password"}
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />

                {error && <p className={style.error}>{error}</p>}

                <Button content={loading ? "Creating" : "Create"} width="full" margin="inc" disabled={loading}/>
            </form>

            <Progress status2={"active"}/>

            <div className={`${style.corner} ${style.green}`}></div>
            <div className={`${style.corner} ${style.yellow}`}></div>
        </Auth>
    );
}