import style from "./Header.module.scss"

export default function Header({title, subtitle}){
    return(
        <header className={style.cardheader}>
            <div>
                <h1 className={style.title}>{title}</h1>
                <p className={style.subtitle}>{subtitle}</p>
            </div>

            <div>
                <img src="src/assets/images/Logo.svg" alt="logo"/>
            </div>
        </header>
    )
}