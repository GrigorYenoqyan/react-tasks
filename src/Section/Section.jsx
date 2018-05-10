import React, { Component } from "react";
import PropTypes from "prop-types";


class Section extends Component {
    render() {
        const {children, className} = this.props;
        return (
            <section className={className}>
                {children}
            </section>
        );
    }
}
Section.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string.isRequired,
}


export default Section;
