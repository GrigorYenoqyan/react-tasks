import React, { Component } from "react";
import OrderedList from "../OrderedList/OrderedList";
import { tasks } from "../../data.js";


class TaskList extends Component {
    render() {
        return (
            <OrderedList data={tasks} className="task-ol"/>
        );
    }
}

export default TaskList;