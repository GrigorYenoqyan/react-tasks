import React, { Component } from "react";
import PropTypes from "prop-types";

import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import "./Pin.css";


class Pin extends Component {
    render() {
        const {icon} = this.props;
        return (
            <div className="pin">
                <FontAwesomeIcon icon={icon}/>
            </div>
        )
    }
}

Pin.propTypes = {
    icon: PropTypes.object.isRequired,
}

export default Pin;