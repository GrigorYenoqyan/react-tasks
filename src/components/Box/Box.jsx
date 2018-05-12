import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Box.css";


class Box extends Component {
    render() {
        const {children, className} = this.props;
        return (
            <div className={className}>
                {children}
            </div>
        )
    }
}

Box.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string.isRequired,
}


export default Box;