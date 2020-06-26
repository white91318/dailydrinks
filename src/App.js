import React from "react";
import Drinklist from "./Components/Drinklist.js";
import addIcon from "./add.png";
import AddDrinks from "./Components/AddDrinks.js";
import "./styles.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks:[
        { id: 1, name: "珍奶" ,price: 25, note: "半糖少冰"},
        { id: 2, name: "綠茶" ,price: 30, note: "跟我一樣甜"},
        { id: 3, name: "奶蓋" ,price: 80, note: "奶蓋加倍"},]
  }
  }
  showAddForm = () => {
    var add = document.getElementById("add-form");
    var listView = document.getElementById("card");
    add.style.visibility = "visible";
    listView.style.filter = "blur(3px)";
  };
  handleAddDrinks = drinks => {
    console.log(drinks)
    let items = this.state.drinks;

    items.push({
      id: items.length + 1,
      name: drinks[0],
      price: drinks[1],
      note: drinks[2],
    });
    console.log(items)
    this.setState({ drinks: items });
  };

  handleUpdateDrink = drinks => {
    console.log(drinks)
    let items = this.state.drinks;
    items[drinks[0]-1].name = drinks[1]
    items[drinks[0]-1].price = drinks[2]
    items[drinks[0]-1].note = drinks[3]
    console.log(items)
    this.setState({ drinks: items });
  };
  getIndexToDel =(delData) =>{
    let items = this.state.drinks;
    delete items[delData-1];
    this.setState({items})
  }
  
  render() {
    return (
      <div>
        <div id="card">
          <Drinklist drinksData={this.state.drinks} getIndexToDel={this.getIndexToDel} update={this.handleUpdateDrink}/>
        </div>
        <img
          src={addIcon}
          alt=""
          className="add-item"
          onClick={this.showAddForm}
        />
        <div className="add-form" id="add-form">
          <AddDrinks add={this.handleAddDrinks} />
        </div>
      </div>
    );
  }
}

export default App;
