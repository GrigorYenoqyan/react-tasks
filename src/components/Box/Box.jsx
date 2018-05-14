import React, { Component } from "react";
import PropTypes from "prop-types";
import SmallText from "../SmallText/SmallText";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import "./Box.css";


class Box extends Component {
    render() {
        const {box, className} = this.props;
        return (
            <div className={className}>
                <div className="box-icon">
                    <FontAwesomeIcon icon={box.icon}/>
                </div>
                <SmallText 
                    content={box.name} 
                    className="box-name"
                />
                <SmallText 
                    content={`Starts from $${box.price}`} 
                    className="box-price" 
                />
                <SmallText content={box.description} className="small-text box-desc" />
            </div>
        )
    }
}

Box.propTypes = {
    box: PropTypes.object.isRequired,
    className: PropTypes.string,
}


export default Box;