import Auth from "../../components/layout/Auth.jsx"
import Button from "../../components/common/buttons/Button.jsx"
import Input from "../../components/common/input/Input.jsx"
import "./Login.scss"

export default function Login(){
    return(
        <Auth title="Welcome" subtitle="Lets increase productivity!" icon="person">
            <form className="form">
                <Input label={"Email:"} placeholder={"Enter your email"}/>

                <Input type={"password"} label={"Password:"} placeholder={"Enter your password"}/>

                <p id="forgot">Forgot password?</p>

                <Button content="Login" width="full"/>
            </form>

            <div className="divider">
                <hr/>
                <span>OR</span>
                <hr/>
            </div>

            <div className="google-signin">
                <div className="google-icon" aria-hidden> 
                    <img src="https://www.gstatic.com/marketing-cms/assets/images/d5/dc/cfe9ce8b4425b410b49b7f2dd3f3/g.webp=s96-fcrop64=1,00000000ffffffff-rw" width="40px" height="40px"/>
                </div>
            </div>
        </Auth>
    )
}