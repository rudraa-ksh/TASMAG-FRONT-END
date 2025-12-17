import style from "./Signup.module.scss"
import Auth from "../../components/layout/Auth.jsx"
import Button from "../../components/common/buttons/Button.jsx"
import Input from "../../components/common/input/Input.jsx"
import Header from "../../components/layout/Header.jsx";
import Rounded from "../../components/common/rounded/Rounded.jsx";
import Progress from "../../components/common/progress/Progress.jsx";

export default function Signup() {
    return (
        <Auth status1={"active"}>
            <Header title="Create Account" subtitle="Get started with TasMag!"/>
            
            <div className={style.avatar_area}>
                <Rounded name="person_add"/>
            </div>

            <form className={style.form}>
                <Input label={"Name:"} placeholder={"Enter your name"}/>

                <Input label={"Email:"} placeholder={"Enter your email"}/>

                <label className={style.checkbox}>
                    <input type="checkbox" />
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