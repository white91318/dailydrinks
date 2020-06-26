import React,{Component} from 'react';
import 'react-dom';
import '../styles.scss';
import xIcon from "../x-symbol.png";


class EditDrinks extends React.Component {
    constructor(props){
        super(props)
    }

    
    render(){
        return<div>
        <div className="edit-title">新增飲料</div>
        <input
          type="text"
          className="edit-input-box"
          value={this.props.drinkName}
          onChange={this.handleDrinksNameChange}
          placeholder="請輸入要喝的飲料名稱"
        />
        <input
          type="number"
          className="edit-input-box"
          value={this.props.drinkPrice}
          onChange={this.handleDrinksPriceChange}
          placeholder="請輸入價格"
        />
        <input
          type="text"
          className="edit-input-box"
          value={this.props.drinkNote}
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
    }
}
export default EditDrinks