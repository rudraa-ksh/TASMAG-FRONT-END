import styles from "./Auth.module.scss"

export default function Auth({children}) {
    return (
        <div className={styles.cardouter}>
            <div className={styles.cardinner}>
                <div className={styles.card}>
                    {children}    
                </div>
            </div>
        </div>
    );
}