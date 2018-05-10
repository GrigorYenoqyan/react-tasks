import React, { Component } from "react";
import PropTypes from "prop-types";


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

export default Box;