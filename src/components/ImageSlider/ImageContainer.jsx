import React, { Component } from 'react';
import PropTypes from "prop-types";
import imgOne from "../../images/img-1.jpg";
import imgTwo from "../../images/img-2.jpg";
import imgThree from "../../images/img-3.jpg";

const imageSrc = [imgOne, imgTwo, imgThree];

class ImageContainer extends Component {
    render() {
        const { indexes } = this.props;
        return(
            <div className="main-section">
                <div className="image-container">
                    <img src={imageSrc[indexes[0]]} className="images" alt="" />
                    <img src={imageSrc[indexes[1]]} className="images current" alt="" />
                    <img src={imageSrc[indexes[2]]} className="images" alt="" />
                </div>
            </div>
        )
    }
}

ImageContainer.propTypes = {
    indexes: PropTypes.arrayOf(PropTypes.number).isRequired,
}

export default ImageContainer;