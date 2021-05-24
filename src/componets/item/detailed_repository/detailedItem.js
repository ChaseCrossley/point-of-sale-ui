import styles from './DetailedItem.module.scss'

export default function DetailedItem(props) {
    return (
        <div className={styles.background} onClick={props.onClick}>
            <div className={styles.container}>
                <div className={styles.repository} style={style}>
                    <h3 className={styles.name}>{props.repo.name}</h3>
                    <p className={styles.description}> {props.repo.description}</p>
                    <a href={props.repo.html_url}>View on GitHub</a>
                    {lang}
                </div>
            </div>
        </div>
    )
}
