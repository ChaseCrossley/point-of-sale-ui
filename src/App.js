import './App.css';
import GridItem from "./componets/item/item";
import fetchUtils from "./utils/fetchUtils";
import Grid from "./componets/grid/grid";
import {useState} from "react";


function App() {

    const [gridItems, setGridItems] = useState([]);


    if (gridItems.length <= 0) {
        fetchUtils.get("/item/retrieveAll").then((data) => {
            return data.json();
        }).then((json) => {
            const newItems = []
            json.forEach((item) => newItems.push((<GridItem key={item.id} item={item}/>)))
            setGridItems(newItems)
        }).catch((error) => {
            console.log("error: " + error)
        })
    }

    return (
        <div className="App">
            <Grid numberOfColumns={3}>
                {gridItems}
            </Grid>
        </div>
    );
}

export default App;
