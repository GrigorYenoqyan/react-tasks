import React, { Component } from 'react';
import PropTypes from "prop-types";

class ButtonArrow extends Component {
    render() {
        const { dir, changeImage } = this.props;
        return (
            <div className={`${dir}-section`}>

                <button className={`${dir}-arrow`} onClick={() => changeImage(dir)}>
                    {dir === "right" ? '>' : '<'}
                </button>
                
            </div>
        )
    }
}

ButtonArrow.propTypes = {
    dir: PropTypes.oneOf(['right', 'left']),
    changeImage: PropTypes.func.isRequired,
}

export default ButtonArrow;