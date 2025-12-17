import styles from"./Input.module.scss"

export default function Input(inp){
    return (
        <>
            <label className={styles.label}>{inp.label}</label>
            <input type="text" className={styles.input} placeholder={inp.placeholder} />
        </>
    )
}