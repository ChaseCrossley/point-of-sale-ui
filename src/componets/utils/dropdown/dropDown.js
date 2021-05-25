import styles from './DropDown.module.scss'
import {Component} from "react";
import RandomUtils from "../../../utils/randomUtils";

export default class DropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: props.options,
            type: props.type,
            selected: !props.selected ? null : props.selected,
            selected_id: !props.selected ? "" : props.selected.id,
            separator: !props.separator ? "-" : props.separator,
            displayFields: props.displayFields,
            id: RandomUtils.getRandomInt(1, 100000000),
            onChangeCallback: props.onChange
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const selected = this.state.options.find((element) => {
            return Number(event.target.value) === element.id
        });

        this.setState({
            selected: selected,
            selected_id: selected.id
        });
        this.state.onChangeCallback(selected, selected.id)
    }

    render() {
        if (!this.state.options) {
            return (<div></div>);
        }
        const options = []
        if (!this.state.selected_id) {
            options.push((
                <option key={-1} value={"NOT SELECTED"}>
                    {"Please Select a " + this.state.type}
                </option>))
        }

        this.state.options.forEach((option) => {
            const displayFields = []
            this.state.displayFields.forEach((field) => displayFields.push(option[field]))
            const displayText = displayFields.join(this.state.separator)
            options.push((
                <option key={option.id} value={option.id}>
                    {displayText}
                </option>))
        })

        let html_id = this.state.type + " dropDown " + this.state.id;

        return (
            <div className={styles.container}>
                <label htmlFor={html_id}>{this.state.type + ":"}</label>
                <select name={html_id} id={html_id} onChange={this.handleChange} value={this.state.selected_id}>
                    {options}
                </select>
            </div>
        )
    }
}
