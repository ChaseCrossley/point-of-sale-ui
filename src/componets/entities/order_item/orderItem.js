import BaseEntity from "../baseEntity";
import styles from './OrderItem.module.scss'
import fetchUtils from "../../../utils/fetchUtils";
import AddInIngredient from "../add_in_ingredient/addInIngredient";

export default class OrderItem extends BaseEntity {
    constructor(props) {
        super(props);
        this.state = {
            orderId: props.orderId,
            itemId: props.itemId
        }
        this.getIngredientItems(props.itemId, (items) => this.setState({
            items: items,
        }))
        this.handleChange = this.handleChange.bind(this)
    }

    getIngredientItems(id = null, callback) {
        const url = "/" + this.getDirective() + `/retrieveIngredientItems/${id}`
        fetchUtils.get(url).then(r => {
            if (!r.ok) {
                console.log("THERE WAS AN ERROR")
                throw Error(r.statusText)
            }
            console.log("GET Request: " + url)
            const json = r.json();
            console.log("response: " + json)
            return json;
        }).then(receivedJson => {
            callback(receivedJson)
        }).catch(err => {
            console.debug("Error in fetch", err);
        });
    }

    handleChange(selected, selected_id) {
        // console.log(selected)
        // this.setState({
        //     selected: selected,
        //     selected_id: selected_id
        // });
        // this.state.onChangeCallback(selected, selected_id)
    }

    render() {
        if (!this.state.items) {
            return (<div></div>);
        }

        const addInIngredients = [];
        let i = 0;
        this.state.items.forEach(item => {
            i += 1
            addInIngredients.push((
                <AddInIngredient key={i} orderItemId={this.id} serving={item.serving} ingredient={item.ingredient}/>))
        })

        return (
            <div className={styles.container}>
                {addInIngredients}
            </div>
        )
    }
}
