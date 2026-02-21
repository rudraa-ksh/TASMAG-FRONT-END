import styles from "./Button.module.scss"

export default function Button(content) {
    return (
        <div className={`${styles.btn} ${styles[content.width]} ${styles[content.margin]}`} onClick={content.onClick}>
            <button type="submit">{content.content}</button>
        </div>
    )
}