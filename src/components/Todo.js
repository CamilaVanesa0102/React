import React, {Component} from 'react';
import '../App.css';


class Todo extends Component {
    constructor () {
        super ();
        this.state = {

        };
    }
    render(){
        return (
            <div className="col-md-4"> 
            <div className="card">
           <div className="card-header mt-4">
          <h3> {this.props.information.title} </h3>
          <span className=" badge badge-pill badge-danger ml.2"> 
          {this.props.information.priority}
          </span>
          </div>
          <div className="card-body">
          <p> {this.props.information.description} </p>
          <p> {this.props.information.responsible}</p>
          </div>
          </div>
          </div>
        )
    }
}
export default Todo

