import BaseEntity from "../baseEntity";
import styles from './Item.module.scss'
import DropDown from "../../utils/dropdown/dropDown";

export default class Item extends BaseEntity {
    constructor(props) {
        super(props);
        this.items = {
            onChangeCallback: props.onChange
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(selected, selected_id) {
        console.log(selected)
        this.setState({
            selected: selected,
            selected_id: selected_id
        });
        this.state.onChangeCallback(selected, selected_id)
    }

    render() {
        if (!this.state.ingredients) {
            return (<div></div>);
        }
        return (
            <div className={styles.container}>
                <DropDown type={"Ingredient"} option={this.state.ingredients} displayFields={["name"]}
                          selected={this.state.selected} onChange={this.handleChange}/>
            </div>
        )
    }
}
