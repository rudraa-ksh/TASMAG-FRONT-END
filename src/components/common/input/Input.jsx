import styles from "./Input.module.scss"

export default function Input({ label, placeholder, name, value, onChange, type = "text" }) {
    return (
        <>
            <label className={styles.label}>{label}</label>
            <input
                type={type}
                className={styles.input}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
            />
        </>
    )
}