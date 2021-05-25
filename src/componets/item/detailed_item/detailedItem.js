import styles from './DetailedItem.module.scss'
import OrderItem from "../../entities/order_item/orderItem";

export default function DetailedItem(props) {
    const item = props.item;
    return (
        <div className={styles.background} onClick={props.onClick}>
            <div className={styles.container}>
                <div className={styles.item}>
                    <img className={styles.image} src={props.imagePath} alt={item.name}/>
                    <div className={styles.text}>
                        <h3 className={styles.name}>
                            {item.name}
                        </h3>
                    </div>
                    <OrderItem orderId={1} itemId={item.id}/>
                </div>
            </div>
        </div>
    )
}
