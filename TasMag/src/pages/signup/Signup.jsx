import "./Signup.scss"
import Button from "../../components/common/buttons/Button.jsx"
import Input from "../../components/common/input/Input.jsx"
import Auth from "../../components/layout/Auth.jsx";

export default function Signup() {
    return (
        <Auth title="Create Account" subtitle="Get started with TasMag!" icon="person_add">
            <form className="form">
                <Input label={"Name:"} placeholder={"Enter your name"}/>

                <Input label={"Email:"} placeholder={"Enter your email"}/>

                <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox-text">I agree to <b>Term of Service</b> and <b>Privacy Policy</b></span>
                </label>

                <Button content="Continue" width="full"/>
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
    );
}