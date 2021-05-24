import './App.css';
import fetchUtils from "./utils/fetchUtils";
import Grid from "./componets/grid/grid";
import CardItem from "./componets/item/card_item/cardItem";

let items = [];

// fetchUtils.get("http://0.0.0.0:3724/api/item/retrieveAll").then((data) => items = data).catch((error) => {
//     items = "An error occurred"
//     console.log(error)
// }).finally(() => console.log(items))

items = [];

for (let i = 0; i < 10; i++) {
    let ingredients = []
    for (let j = 0; j < 5; j++) {
        ingredients.push("ingredient" + j)
    }
    items.push((<CardItem name={"item " + i} ingredients={ingredients} imageUrl={"https://source.unsplash.com/collection/75315648/1600x900"} key={i.toString()}/>))
}

function App() {
    return (
        <div className="App">
            <Grid numberOfColumns={3}>
                {items}
            </Grid>
        </div>
    );
}

export default App;
