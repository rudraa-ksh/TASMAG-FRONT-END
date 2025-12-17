import styles from "./Button.module.scss"

export default function Button(content){
    return (
        <div className={`${styles.btn} ${styles[content.width]} ${styles[content.margin]}`}>
            <button type="button">{content.content}</button>
        </div>
    )
}