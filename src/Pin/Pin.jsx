import React, { Component } from "react";
import PropTypes from "prop-types";

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import "./Pin.css";



class Pin extends Component {
    render() {
        return (
            <div className="pin">
            <FontAwesomeIcon icon="coffee"/>
                <i className={this.props.icon} aria-hidden="true"></i>
            </div>
        )
    }
}

Pin.propTypes = {
    icon: PropTypes.node.isRequired,
}

export default Pin;