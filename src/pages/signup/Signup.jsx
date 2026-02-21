import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Signup.module.scss"
import Auth from "../../components/layout/Auth.jsx"
import Button from "../../components/common/buttons/Button.jsx"
import Input from "../../components/common/input/Input.jsx"
import Header from "../../components/layout/Header.jsx";
import Rounded from "../../components/common/rounded/Rounded.jsx";
import Progress from "../../components/common/progress/Progress.jsx";

export default function Signup() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({ name: "", email: "" });
    const [agreed, setAgreed] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        if (!formData.name || !formData.email) {
            setError("Please fill in all fields");
            return;
        }

        if (!agreed) {
            setError("You must agree to the Terms of Service and Privacy Policy");
            return;
        }

        navigate("/password", { state: { name: formData.name, email: formData.email } });
    };

    return (
        <Auth status1={"active"}>
            <Header title="Create Account" subtitle="Get started with TasMag!"/>

            <div className={style.avatar_area}>
                <Rounded name="person_add"/>
            </div>

            <form className={style.form} onSubmit={handleSubmit}>
                <Input
                    label={"Name:"}
                    placeholder={"Enter your name"}
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />

                <Input
                    label={"Email:"}
                    placeholder={"Enter your email"}
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />

                {error && <p className={style.error}>{error}</p>}

                <label className={style.checkbox}>
                    <input
                        type="checkbox"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                    />
                    <span className={style.checkbox_text}>I agree to <b>Term of Service</b> and <b>Privacy Policy</b></span>
                </label>

                <Button content="Continue" width="full"/>
            </form>

            <div className={style.divider}>
                <hr/>
                <span>OR</span>
                <hr/>
            </div>

            <div className={style.google_signin}>
                <img src="https://www.gstatic.com/marketing-cms/assets/images/d5/dc/cfe9ce8b4425b410b49b7f2dd3f3/g.webp=s96-fcrop64=1,00000000ffffffff-rw" width="40px" height="40px"/>
            </div>

            <Progress status1={"active"}/>

            <div className={`${style.corner} ${style.green}`}></div>
            <div className={`${style.corner} ${style.yellow}`}></div>
            
        </Auth>
    );
}