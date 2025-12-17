import Auth from "../../components/layout/Auth.jsx"
import Button from "../../components/common/buttons/Button.jsx"
import Input from "../../components/common/input/Input.jsx"
import Header from "../../components/layout/Header.jsx";
import Rounded from "../../components/common/rounded/Rounded.jsx";
import Progress from "../../components/common/progress/Progress.jsx";
import style from "./Login.module.scss"

export default function Login(){
    return(
        <Auth status1={"active"}>
            <Header title="Welcome" subtitle="Lets increase productivity"/>

            <div className={style.avatar_area}>
                <Rounded name="person"/>
            </div>
            
            <form className={style.form}>
                <Input label={"Email:"} placeholder={"Enter your email"}/>

                <Input type={"password"} label={"Password:"} placeholder={"Enter your password"}/>

                <p id={style.forgot}>Forgot password?</p>

                <Button content="Login" width="full"/>
            </form>

            <div className={style.divider}>
                <hr/>
                <span>OR</span>
                <hr/>
            </div>

            <div className={style.google_signin}>
                <img src="https://www.gstatic.com/marketing-cms/assets/images/d5/dc/cfe9ce8b4425b410b49b7f2dd3f3/g.webp=s96-fcrop64=1,00000000ffffffff-rw" width="40px" height="40px"/>
            </div>

            <Progress status2={"active"}/>

            <div className={`${style.corner} ${style.green}`}></div>
            <div className={`${style.corner} ${style.yellow}`}></div>

        </Auth>
    )
}