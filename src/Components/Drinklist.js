import React,{Component} from 'react';
import 'react-dom';
import '../styles.scss';
import { render } from '@testing-library/react';


class Drinklist extends Component {
    constructor(props) {
        super(props);
        this.state ={
            isEditing : false,
            isTyping : false,
            EditingItem : '',
            drinkName: '',
            drinkPrice: '',
            drinkNote: '',
        }
    }

    
    onDelete = (e) => {
        console.log("dataToDel",e.target.id)
        this.props.getIndexToDel(e.target.id);
    }
    
    onEdit = (e) => {
        this.setState({
            isEditing: true,
            EditingItem: e.target.id,
            drinkName: document.getElementById(e.target.id).childNodes[0].textContent,
            drinkPrice: document.getElementById(e.target.id).childNodes[1].textContent.replace("$",""),
            drinkNote: document.getElementById(e.target.id).childNodes[3].textContent,
        })
        let EditDrink = document.getElementById(e.target.id).style.background = "grey"
    }
    
    onUpdate = (e) => {
        console.log("update",this.state)

        this.setState({
            isEditing : false,
            isTyping: false,
            drinkName:  this.state.drinkName,
            drinkPrice: this.state.drinkPrice,
            drinkNote: this.state.drinkNote,
        })
        let EditDrink = document.getElementById(e.target.id).style.background = "cadetblue"
        let pushToList = []
        pushToList.push(this.state.EditingItem,this.state.drinkName,this.state.drinkPrice,this.state.drinkNote)
        this.props.update(pushToList);
    }
     
    handleDrinksNameChange = e => {
        console.log(e.target.value)
        this.setState({ drinkName: e.target.value ,isTyping:true});
        console.log("drinkName",this.state.drinkName)
      };
    
    handleDrinksNoteChange = e => {
        this.setState({ drinkNote: e.target.value ,isTyping:true });
    };
    
    handleDrinksPriceChange = e => {
        this.setState({ drinkPrice: e.target.value ,isTyping:true });
    };


    render(){
        let display = this.props.drinksData.map( d =>{
            let {isEditing,EditingItem,isTyping} = this.state;
            return <div className="drink-card" id={d.id}>
                <span className='drink-name'>
                    {isEditing && d.id == EditingItem ? <textarea value={isTyping?this.state.name:d.name} onChange={this.handleDrinksNameChange} /> : d.name}
                </span>
                <span className='drink-price'>
                    {isEditing && d.id == EditingItem ? <textarea value={isTyping?this.state.price:d.price} onChange={this.handleDrinksPriceChange} /> : d.price}$
                </span>
                <hr></hr>  
                <span className='drink-note'>
                    {isEditing && d.id == EditingItem ? <textarea value={isTyping?this.state.note:d.note} onChange={this.handleDrinksNoteChange} /> : d.note}
                </span>
                <span id={d.id} className='del-button' onClick={this.onDelete}>刪除</span>
                <span id={d.id} className='edit-button' onClick={isEditing?this.onUpdate:this.onEdit}>{isEditing && d.id == EditingItem ? "更新" : "修改" }</span>
            </div>
        })
    return<div>
        {display}
        
    </div>
    }
}
export default Drinklist

