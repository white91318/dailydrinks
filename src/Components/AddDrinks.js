import React, { Component } from "react";
import "react-dom";
import { render } from "@testing-library/react";
import xIcon from "../x-symbol.png";
import "../styles.scss";

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getInitialState = () => {
    return { drinkName: "" ,drinkNote: "", drinkPrice: ""};
  };
  handleDrinksNameChange = e => {
    this.setState({ drinkName: e.target.value });
  };
  handleDrinksNoteChange = e => {
    this.setState({ drinkNote: e.target.value });
  };
  handleDrinksPriceChange = e => {
    this.setState({ drinkPrice: e.target.value });
  };
  handleAddDrinks = e => {
    let pushToList = []
    pushToList.push(this.state.drinkName,this.state.drinkPrice,this.state.drinkNote)
    this.props.add(pushToList);
    this.close()
  };
  close = () => {
    document.getElementById("add-form").style.visibility = "hidden";
    var listView = document.getElementById("card");
    listView.style.filter = "none";
  };
  render() {
    return (
      <div>
        <div className="add-title">新增飲料</div>
        <input
          type="text"
          className="add-input-box"
          value={this.state.drinkName}
          onChange={this.handleDrinksNameChange}
          placeholder="請輸入要喝的飲料名稱"
        />
        <input
          type="number"
          className="add-input-box"
          value={this.state.drinkPrice}
          onChange={this.handleDrinksPriceChange}
          placeholder="請輸入價格"
        />
        <input
          type="text"
          className="add-input-box"
          value={this.state.drinkNote}
          onChange={this.handleDrinksNoteChange}
          placeholder="請輸入備註（甜度、冰塊、加料）"
        />
        <button className="add-btn" onClick={this.handleAddDrinks}>
          新增
        </button>
        <img
          src={xIcon}
          alt=""
          className="add-close-btn"
          onClick={this.close}
        />
      </div>
    );
  }
}

export default AddItem;
