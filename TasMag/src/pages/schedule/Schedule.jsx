import style from "./Schedule.module.scss"
import Auth from "../../components/layout/Auth.jsx"
import Header from "../../components/layout/Header.jsx"
import Button from "../../components/common/buttons/Button.jsx"
import Progress from "../../components/common/progress/Progress.jsx"

export default function Schedule(){
    return (
        <Auth>
            <Header title="Upload Schedule" subtitle="Stay organized effortlessly!"/>

            <div className={style.shimmer}>
                <img src="src\assets\images\Image Upload.svg"></img>
            </div>


            <Button content="Skip" margin="inc"/>

            <Progress status3="active"/>
        </Auth>
    )
}