import styles from './Grid.module.scss'

export default function Grid(props) {

    let rows = [];
    let row = [];
    for (let i = 0; i < props.children.length; i++) {
        row.push(props.children[i])
        if (row.length === props.numberOfColumns) {
            rows.push((<div key={rows.length + 1} className={styles.row}>{row}</div>));
            row = []
        }
    }
    if (row.length > 0) {
        rows.push((<div key={rows.length + 1} className={styles.row}>{row}</div>));
    }

    return (
        <div className={styles.container}>
            {rows}
        </div>
    )
}
