import styles from './CardItem.module.scss'
import {Component} from "react";
import loading_gif from "../../../assets/loading.gif"

export default class CardItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: props.item,
            imagePath: props.imagePath

        }
        this.handleClick = props.onClick
    }



    render() {
        if (!this.state.item) {
            return (
                <div className={styles.container}>
                    <img className={styles.image} src={loading_gif} alt={"loading"}/>
                </div>
            )
        }

        const item = this.state.item;
        let ingredients = []
        item.ingredientItems.forEach((item) => ingredients.push(item.ingredient.name))
        ingredients = ingredients.join(", ")

        return (
            <div className={styles.container} onClick={this.handleClick}>
                <img className={styles.image} src={this.state.imagePath} alt={item.name}/>
                <div className={styles.text}>
                    <h3 className={styles.name}>
                        {item.name}
                    </h3>
                    <p className={styles.ingredient}>
                        {ingredients}
                    </p>
                </div>
            </div>
        )
    }
}
