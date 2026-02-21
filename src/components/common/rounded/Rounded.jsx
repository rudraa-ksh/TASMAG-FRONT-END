import style from "./Rounded.module.scss"

export default function Rounded(icon){
    return (
        <div className={style.roundouter}>
            <span className="material-symbols-outlined">{icon.name}</span>
        </div>
    )
}