import BaseEntity from "../baseEntity";
import styles from './Ingredient.module.scss'
import DropDown from "../../utils/dropdown/dropDown";

export default class Ingredient extends BaseEntity {
    constructor(props) {
        super(props);
        this.state = {
            onChangeCallback: props.onChange,
            selected: props.selected
        }
        this.get(null, (ingredients) => this.setState({
            ingredients: ingredients,
        }))
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(selected) {
        console.log(selected)
        this.setState({
            selected: selected,
        });
        this.state.onChangeCallback(selected)
    }

    render() {
        if (!this.state.ingredients) {
            return (<div></div>);
        }
        const selected_id = !this.state.selected ? "" : this.state.selected.id
        return (
            <div className={styles.container}>
                <DropDown type={"Ingredient"} options={this.state.ingredients} displayFields={["name"]}
                          selected={this.state.selected} selected_id={selected_id} onChange={this.handleChange}/>
            </div>
        )
    }
}
