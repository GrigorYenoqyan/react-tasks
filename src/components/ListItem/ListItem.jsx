import React, { Component } from "react";
import PropTypes from "prop-types";


class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovered: false,
            wasDone: false,
        };
    }

    doTask = (event) => {
        const prev = event.target.previousElementSibling;
        if (!prev || prev.getAttribute("data-wasdone") === "true") {
            this.setState({
                wasDone: true,
            })
        } else {
            alert("Please complete the previous task first");
        }
        
    }

    markItem = () => {
        this.setState({
            isHovered: true,
        })
    }

    unmarkItem = () => {
        this.setState({
            isHovered: false,
        })
    }
    
    render() {
        const {children, className} = this.props;
        let newClass = this.state.isHovered ? `task-hover` : '';
        newClass = this.state.wasDone ? `${newClass} task-done` : newClass;
        return (
            <li 
                className={`${className} ${newClass}`} 
                onMouseEnter={this.markItem}
                onMouseOut={this.unmarkItem}
                onClick={this.doTask}
                data-wasdone={this.state.wasDone}
            >
                {children}
            </li>
        );
    }
}

ListItem.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}

export default ListItem;