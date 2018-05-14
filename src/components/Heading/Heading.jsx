import React, { Component } from "react";
import PropTypes from "prop-types";

class Heading extends Component {
    render() {
        const {label, className} = this.props;
        return (
            <h1 className={className}>
                {label}
            </h1>
        )
    }
};

Heading.propTypes = {
    label: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default Heading;