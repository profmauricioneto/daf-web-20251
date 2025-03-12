import React, { Component, Fragment } from 'react';
import Task from './Task';

class TaskList extends Component {
    constructor(props){
        super(props);
        this.state = {
            tasks: [
                {title: "study react", completed: true},
                {title: "study node", completed: true},
                {title: "study sequelize", completed: false},
            ]
        }
    }


    render() {
        return(
            <Fragment>
                <h1>Task List</h1>
                <ul>
                    {this.state.tasks.map((task, index) =>(
                        <Task key={index} title={task.title} completed={task.completed}/>
                    ))
                    }
                </ul>
            </Fragment>
        );
    }
};

export default TaskList;