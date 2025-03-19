import React, { Component } from 'react';
import './Task.css';

class Task extends Component {

    render() {
        return(
            <li> Título: {this.props.title} - {this.props.completed ? "Completed" : "Pending"} </li>
        );
    }
};

export default Task;