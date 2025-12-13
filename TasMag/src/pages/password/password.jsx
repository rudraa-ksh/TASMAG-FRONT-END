import Auth from "../../components/layout/Auth.jsx"
import Button from "../../components/common/buttons/Button.jsx"
import Input from "../../components/common/input/Input.jsx"
import "./password.scss"

export default function Password(){
    return(
        <Auth title="Create Password" subtitle={<> Make it strong.<br/>Like a Wi-Fi signal on a good day </>} icon="key">
            <form className="form">
                <Input label={"Password:"} placeholder={"Enter your password"}/>

                <div className="instructions">
                    <h4>Instructions:</h4>
                    <ul>
                        <li>Password must be 8 characters long.</li>
                        <li>Use a mix of letters, numbers and special characters.</li>
                    </ul>
                </div>
            
                <Input type={"password"} label={"Re-Enter Password:"} placeholder={"Re-enter your password"}/>
            
                <Button content="Create" width="full" margin="inc" />
            </form>
        </Auth>
    )
}