import React, { Component } from "react";

class Task extends Component {
   render() {
       return (
           <div>
               <h3>{this.props.title}</h3>
               <p>Status of task: {this.props.completed ? "Completed": "Incompleted"}</p>
           </div>
       );
   }
}

export default Task;