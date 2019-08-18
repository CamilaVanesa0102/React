import React, {Component } from 'react';
import logo from './logo.svg';
import "./App.css";
import TodoForm from "./components/TodoForm.js";  
import Todo from "./components/Todo.js";  
import { todos } from "./todos.json";


class App extends Component {
 constructor () {
   super ();
   this.state = {
     todos 
   }
   this.pushearToDo = this.pushearToDo.bind(this);
   
 }
 pushearToDo(todo){
    this.setState({
      todos: [...this.state.todos, todo]
    })
 }

  render () {
    var formulario = 
      <div className="col-md-4"> 
      <div className="card">
     <TodoForm pushearToDo={this.pushearToDo}></TodoForm>
    </div>
    </div> 
    ;
   var todos = this.state.todos.map((todo, i) => { 
      return (
        <Todo information={todo}></Todo> 
      )
    })
   return (
    <div className="App">
     <nav className ="navbar navbar-dark bg-dark">
     <a href=" " className="text-white">
     Tareas
     <span className="badge badge-pill badge-light ml-2">
      { this.state.todos.length}
     </span>
     </a>

     </nav>

     <div className="container">
     <div className="row mt-4">
      {formulario}
      {todos}
     </div>
     </div>
     

        
    </div>
  );
}

}
export default  App;