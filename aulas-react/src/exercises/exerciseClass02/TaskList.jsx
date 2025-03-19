import React, { Component, Fragment } from 'react';
import Task from './Task';
import './TaskList.css';

class TaskList extends Component {
    constructor(props){
        super(props);
        this.state = {
            tasks: [
                {title: "study react", completed: true},
                {title: "study node", completed: true},
                {title: "study sequelize", completed: false},
            ],
            newTitle: '',
            newStatus: false,
        };
    }

    handleNewTitle = (event) => {
        this.setState({newTitle: event.target.value});
    };

    
    handleNewStatus = (event) => {
        this.setState({newStatus: event.target.checked});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const newTask = {
            title: this.state.newTitle,
            completed: this.state.newStatus
        };
        this.setState({
            tasks: [...this.state.tasks, newTask],
            newTitle: '',
            newStatus: false,
        });
    }


    render() {
        return(
            <Fragment>
                <h1>Task List</h1>
                <form onSubmit={this.handleSubmit}>
                    Title <input 
                    type="text"
                    placeholder='write a task title'
                    value={this.state.newTitle}
                    onChange={this.handleNewTitle}
                    required
                    />

                    <label>
                        Status <input 
                                    type="checkbox"
                                    checked={this.state.newStatus}
                                    onChange={this.handleNewStatus}
                                    />
                                    completed
                    </label>
                    <button type='submit'>Adicionar</button>
                </form>
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