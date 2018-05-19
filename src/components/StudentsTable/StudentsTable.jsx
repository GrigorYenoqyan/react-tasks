import React, { Component } from "react";
import Table from "../Table/Table";
import { students } from "../../data.js";
import "./StudentsTable.css";


class StudentsTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sorted: "unsorted",
        };
    }

    changeState = () => {
        let order;
        if (this.state.sorted === "unsorted") {
            order = "asc";
        } else if (this.state.sorted === "asc") {
            order = "desc";
        } else {
            order = "unsorted";
        }
        this.setState({
            sorted: order,
        })
    }

    render() {
        let studentsCopy = [...students];
        if (this.state.sorted === "asc") {
            studentsCopy.sort((a, b) => a.age - b.age);
        } else if (this.state.sorted === "desc") {
            studentsCopy.sort((a, b) => b.age - a.age);
        }
        return (
            <Table 
                data={studentsCopy} 
                handleClick={this.changeState}
            />
        )
    }
}

export default StudentsTable;