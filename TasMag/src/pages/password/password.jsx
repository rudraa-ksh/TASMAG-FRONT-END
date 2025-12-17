import Auth from "../../components/layout/Auth.jsx"
import Button from "../../components/common/buttons/Button.jsx"
import Input from "../../components/common/input/Input.jsx"
import Header from "../../components/layout/Header.jsx";
import Rounded from "../../components/common/rounded/Rounded.jsx";
import style from "./Password.module.scss"
import Progress from "../../components/common/progress/Progress.jsx";

export default function Password(){
    return(
        <Auth status2={"active"}>
            <Header title="Create Password" subtitle={<> Make it strong.<br/>Like a Wi-Fi signal on a good day </>}/>
                        
            <div className={style.avatar_area}>
                <Rounded name="key"/>
            </div>
            <form className={style.form}>
                <Input label={"Password:"} placeholder={"Enter your password"}/>

                <div className={style.instructions}>
                    <h4>Instructions:</h4>
                    <ul>
                        <li>Password must be 8 characters long.</li>
                        <li>Use a mix of letters, numbers and special characters.</li>
                    </ul>
                </div>
            
                <Input type={"password"} label={"Re-Enter Password:"} placeholder={"Re-enter your password"}/>
            
                <Button content="Create" width="full" margin="inc" />
            </form>
            <Progress status2={"active"}/>

            <div className={`${style.corner} ${style.green}`}></div>
            <div className={`${style.corner} ${style.yellow}`}></div>

        </Auth>
    )
}