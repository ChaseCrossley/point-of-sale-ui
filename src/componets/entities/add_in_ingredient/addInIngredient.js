import BaseEntity from "../baseEntity";
import styles from './AddInIngredient.module.scss'
import Ingredient from "../ingredient/ingredient";
import Serving from "../serving/serving";

import deletePic from "../../../assets/delete icon.png"

export default class AddInIngredient extends BaseEntity {
    constructor(props) {
        super(props);
        this.state ={
            orderItemId: props.orderItemId,
            serving: props.serving,
            ingredient: props.ingredient
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(ingredient= undefined, serving = undefined) {
        const newIngredient = !ingredient ? this.state.ingredient : ingredient
        const newServing = !serving ? this.state.serving : serving

        console.log("before state: " + this.state)
        this.setState({
            ingredient: newIngredient,
            serving: newServing
        });
        console.log("after state: " + this.state)
        // this.state.onChangeCallback(selected, selected_id)
    }

    render() {
        return (
            <div className={styles.container}>
                <Ingredient selected={this.state.ingredient} onChange={(ingredient) => this.handleChange(ingredient, undefined)}/>
                <Serving state={this.state.serving} onChange={(serving) => this.handleChange(undefined, serving)}/>
                <img className={styles.deletePic} src={deletePic} alt={"delete"}/>
            </div>
        )
    }
}
