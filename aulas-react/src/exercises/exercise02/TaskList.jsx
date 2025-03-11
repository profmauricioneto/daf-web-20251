import React, { Component } from "react";
import Task from "./Task";

class TaskList extends Component {
   constructor(props) {
       super(props);
       this.state = {
           tasks: [
               { title: "Study HTML", completed: true },
               { title: "Study CSS", completed: true },
               { title: "Study JavaScript", completed: false }
           ]
       }
   }

   render() {
       return (
           <div>
               {this.state.tasks.map((task, index) => (
                   <Task key={index} title={task.title} completed={task.completed} />
               ))}
           </div>
       );
   }
}

export default TaskList