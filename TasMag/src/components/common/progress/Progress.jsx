import styles from "./Progress.module.scss"


export default function Progress({status1, status2, status3, status4}){
    return(
        <div className={styles.pager}>
            <div className={`${styles.pagerdot} ${styles[status1]}`} />
            <div className={`${styles.pagerdot} ${styles[status2]}`} />
            <div className={`${styles.pagerdot} ${styles[status3]}`} />
            <div className={`${styles.pagerdot} ${styles[status4]}`} />
        </div>
    )
}