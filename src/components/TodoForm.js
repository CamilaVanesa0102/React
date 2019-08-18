import React, {Component } from "react";

class TodoForm extends Component {
    constructor () {
        super ();
        this.state = {
            title: "",
            responsible: "",
            description: "",
            priority: "low"
        };
        
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtomClick = this.handleButtomClick.bind(this);
    }
    handleButtomClick(){
        this.props.pushearToDo(this.state);
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }
render () {
    return (
        <div className= "card">
                <div className="form-group">
                    <input 
                    type="text"
                    name="title"
                    className="form-content"
                    placeholder="Title"
                    onChange={this.handleInputChange}
                    />
                </div>

                <div className="form-group">
                    <input 
                    type="text"
                    name="responsible"
                    className="form-content"
                    placeholder="Responsible"
                    onChange={this.handleInputChange}
                    />
                </div>  

                <div className="form-group">
                    <input 
                    type="text"
                    name="description"
                    className="form-content"
                    placeholder="Description"
                    onChange={this.handleInputChange}
                    />
                </div> 

                <div className="form-group">
                    <select
                    name="priority"
                    className="form-control"
                    onChange={this.handleInputChange}
                    >
                    <option>low</option>
                    <option>medium</option>
                    <option>high</option>
                    </select>
                </div>              
            <button  onClick={this.handleButtomClick} className="btn btn-primary">
                Crear
            </button>
        </div>
    )
    }
}
export default TodoForm;