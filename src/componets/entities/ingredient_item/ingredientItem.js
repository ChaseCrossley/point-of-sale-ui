import BaseEntity from "../baseEntity";
import styles from './IngredientItem.module.scss'
import DropDown from "../../utils/dropdown/dropDown";

export default class IngredientItem extends BaseEntity {
    constructor(props) {
        super(props);
        this.get(null, (ingredients) => this.setState({
            ingredients: ingredients,
            onChangeCallback: props.onChange
        }))
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(selected, selected_id) {
        console.log(selected)
        this.setState({
            selected: selected,
            selected_id: selected_id
        });
        // this.state.onChangeCallback(selected, selected_id)
    }

    render() {
        if (!this.state.ingredients) {
            return (<div></div>);
        }
        return (
            <div className={styles.container}>
                <DropDown type={"IngredientItem"} options={this.state.ingredients} displayFields={["name"]}
                          selected={this.state.selected} onChange={this.handleChange}/>
            </div>
        )
    }
}
