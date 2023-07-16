import { Component } from "react";
export class List extends Component {
    constructor() {
        super();
        this.state = {
            userInput: "",
            todoList: []
        }
    }
    onChangeEvent(e) {
        this.setState({userInput: e})
    }
    addItem(input) {
        if (input === "") {
            alert ("Please enter an item")
        }
        else {
        let listPlan = this.state.todoList;
        listPlan.push(input)
        this.setState({todoList : listPlan, userInput: ""})
    }
}
deleteItem() {
    let listPlan =this.state.todoList;
    listPlan = [];
    this.setState({todoList : listPlan})
}
    deleteWord(event) {
        const li = event.target;
        li.classList.toggle("line");
    }
    onFormSubmit(e) {
        e.preventDefault();
    }
        render() {
            return(
                <div>
                    <form onSubmit = {this.onFormSubmit}>
                    <div className="main">
                    <input type='text' onChange={(e) =>{this.onChangeEvent(e.target.value)}}
                    value={this.state.userInput} />
                </div>
                <div className="main">
                    <button onClick={()=>this.addItem (this.state.userInput)} className="btn">Add</button>
                    </div>
                    <ul>
                    {this.state.todoList.map((item) => (
                    <li onClick= {this.deleteWord}>
                        {item}
                        </li>
                ))}
                </ul>
                <div className="main">
                <button onClick={() => this.deleteItem()} className="btn1">Delete</button>
                </div>
                </form>
                </div>
            )
        }
    }

