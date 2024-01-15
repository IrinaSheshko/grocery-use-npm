import { Component } from "react";
import Icon from './icons8.png';

export class GroceryList extends Component {
constructor(){
    super();
    this.state = {
        userInput: "",
        groceryList: [],
    }
}
onChangeEvent(e){
this.setState({userInput: e})
}
addItem(input) {
    if (input === ''){
        alert ('Please enter an item')
    } else {

    let listArray = this.state.groceryList;
    listArray.push(input);
    this.setState({groceryList: listArray, userInput: ''});
    }}
crossedWord(event){
    const li = event.target;
    li.classList.toggle("crossed");
}
deleteItem() {
    let listArray = this.state.groceryList;
    listArray = [];
    listArray.length = 0;
    this.setState({groceryList: listArray})
}
onFormSubmit(e) {
    e.preventDefault(); 
}
render(){
    return(
        <div>
            <form onSubmit={this.onFormSubmit}>
        <div className="container">
            <input 
            type="text"
            placeholder="What to you want to buy today?"
            onChange={(e) => {this.onChangeEvent(e.target.value)}}
            value={this.state.userInput}/>
        </div>
        <div className="container">
        <button onClick={() => this.addItem(this.state.userInput)} className="add btn">Add</button>
        </div>
        <ul>
            {this.state.groceryList.map((item, index) => (
           <li onClick={this.crossedWord} key={index}>
           <img width="30" height="30" src={Icon} alt="inspection"/>
           {item}</li>
            ))}
        </ul>
        <div className="container">
           <button onClick={() => this.deleteItem()} className="delete btn">Delete</button>
        </div>
        </form>
        </div>

    )
}
}

export default GroceryList;