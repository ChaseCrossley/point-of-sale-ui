import styles from './CardItem.module.scss'
import {Component} from "react";
import loading_gif from "../../../assets/loading.gif"
import {createApi} from 'unsplash-js';

// on your node server
const serverApi = createApi({
    accessKey: '6NmQ3bI0CYjPkEa5R6-HSvgRkXWpbglcJhG-oY8W2fc',
});


export default class CardItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            ingredients: props.ingredients,
            imagePath: loading_gif
        }
        this.sleep(2000, () => {
            console.log(this.id)
            this.setState({imagePath: "https://source.unsplash.com/collection/75315648/1600x900?sig=" + this.getRandomInt(0, 10000000)});
            this.id += 1
            console.log(this.id)

        })
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    async sleep(ms, callback) {
        await new Promise(resolve => setTimeout(resolve, ms));
        callback()
    }

    render() {
        let ingredients = this.state.ingredients.join(", ")
        return (
            <div className={styles.container}>
                <img className={styles.image} src={this.state.imagePath} alt={this.state.name}/>
                <div className={styles.text}>
                    <h3 className={styles.name}>
                        {this.state.name}
                    </h3>
                    <p className={styles.ingredient}>
                        {ingredients}
                    </p>
                </div>
            </div>
        )
    }
}
