import Auth from "../../components/layout/Auth.jsx"
import Header from "../../components/layout/Header.jsx"
import Progress from "../../components/common/progress/Progress.jsx"
import Button from "../../components/common/buttons/Button.jsx"
import style from "./Study.module.scss"


export default function Study(){
    return(
        <Auth>
            <Header title="Great!" subtitle="Tell us where you study" />

            <div className={style.select}>
                <div className={style.option}>
                    <img src="src/assets/gif/student.gif"></img>
                    <p>School</p>
                </div>
                <div className={style.option}>
                    <img src="src/assets/gif/graduation.gif"></img>
                    <p>College</p>
                </div>
            </div>

            <Button content="Skip" />

            <Progress status3={"active"}/>

            <div className={`${style.corner} ${style.green}`}></div>
            <div className={`${style.corner} ${style.yellow}`}></div>
        </Auth>
    )
}