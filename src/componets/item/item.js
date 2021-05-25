import {Component} from "react";
import CardItem from "./card_item/cardItem";
import DetailedItem from "./detailed_item/detailedItem";
import loading_gif from "../../assets/loading.gif";
import RandomUtils from "../../utils/randomUtils";

export default class GridItem extends Component {
    constructor(props) {
        super(props);
        this.state = {card: true, item: props.item, imagePath: loading_gif}
        this.handleClick = this.handleClick.bind(this)
        this.sleep(2000, () => {
            this.setState({imagePath: "https://source.unsplash.com/collection/75315648/1600x900?sig=" + RandomUtils.getRandomInt(0, 10000000)}, () => console.log("state changes"));
        })
    }

    async sleep(ms, callback) {
        await new Promise(resolve => setTimeout(resolve, ms));
        callback()
    }

    handleClick() {
        const newState = !this.state.card
        this.setState({card: newState})
        if (newState) {
            document.body.classList.remove("no-scroll")
        } else {
            document.body.classList.add("no-scroll")
        }
    }

    render() {
        return this.state.card ? <CardItem key={this.state.imagePath} onClick={this.handleClick} item={this.state.item}
                                           imagePath={this.state.imagePath}/> :
            <DetailedItem key={this.state.imagePath} onClick={this.handleClick} item={this.state.item}
                          imagePath={this.state.imagePath}/>
    }
}
