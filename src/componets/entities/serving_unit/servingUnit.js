import BaseEntity from "../baseEntity";
import styles from './ServingUnit.module.scss'
import DropDown from "../../utils/dropdown/dropDown";

export default class ServingUnit extends BaseEntity {
    constructor(props) {
        super(props);
        this.state = {
            selected: props.selected,
            onChangeCallback: props.onChange
        }
        this.get(null, (servingUnits) => this.setState({
            servingUnits: servingUnits
        }))
        console.log("end constructor")
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(selected, selected_id) {
        console.log(selected)
        this.setState({
            selected: selected,
        });
        this.state.onChangeCallback(selected, selected_id)
    }

    render() {
        if (!this.state.servingUnits) {
            return (<div></div>);
        }

        return (
            <div className={styles.container}>
                <DropDown type={"Serving Unit"} options={this.state.servingUnits}
                          displayFields={["abbreviation", "name"]} selected={this.state.selected}
                          onChange={this.handleChange}/>
            </div>
        )
    }
}
