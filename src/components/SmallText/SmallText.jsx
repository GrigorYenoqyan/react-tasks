import React, { Component } from "react";
import PropTpyes from "prop-types";

class SmallText extends Component {
    render() {
        const {content, className} = this.props;
        return (
            <h5 className={className}>
                {content}
            </h5>
        )
    }

}

SmallText.propTpyes = {
    content: PropTpyes.string.isRequired,
    className: PropTpyes.string.isRequired,
}
SmallText.defaultProps = {
    className: "small-text",
}

export default SmallText;

