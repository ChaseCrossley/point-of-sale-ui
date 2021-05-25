import BaseEntity from "../baseEntity";
import styles from './Serving.module.scss'
import ServingUnit from "../serving_unit/servingUnit";
import RandomUtils from "../../../utils/randomUtils";

export default class Serving extends BaseEntity {
    constructor(props) {
        super(props);
        console.log("calling setState")
        if (!props.state) {
            this.state = {
                amount: props.amount,
                servingUnit: props.servingUnit,
                onChangeCallback: props.onChange,
                html_id_random: RandomUtils.getRandomInt(1, 100000000)
            }
        } else {

            this.state = props.state;
            this.state["onChangeCallback"] = props.onChange;

        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event, amount = null, servingUnit = null) {
        let newAmount;
        if (event) {
            newAmount = event.target.value;
        } else {
            newAmount = !amount ? this.state.amount : amount
        }
        const newServingUnit = !servingUnit ? this.state.selected : servingUnit

        this.setState({
            amount: newAmount,
            servingUnit: newServingUnit,
        }, () => {
            this.state.onChangeCallback({amount: newAmount, servingUnit: newServingUnit})
        })

    }

    render() {
        const html_id = "quantity " + this.state.html_id_random
        return (
            <div className={styles.container}>
                <div className={styles.quantityContainer}>
                    <label htmlFor={html_id}>{"Quantity:"}</label>
                    <input type="number" id={html_id} value={this.state.amount} placeholder={"number of servings"}
                           inputMode={"numeric"}
                           onChange={this.handleChange} className={styles.quantity}/>
                </div>
                <ServingUnit selected={this.state.servingUnit}
                             onChange={(selected) => this.handleChange(null, null, selected)}/>
            </div>
        )
    }
}
