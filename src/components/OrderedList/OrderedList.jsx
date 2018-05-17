import React, { Component } from "react";
import PropTypes from "prop-types";
import ListItem from "../ListItem/ListItem";


class OrderedList extends Component {
    render() {
        const {className, data} = this.props;
        return (
            <ol className={className}>
                {
                    data.map((task) => (
                            <ListItem className="task" key={task}>
                                {task}
                            </ListItem>
                        )
                    )
                }
            </ol>
        );
    }
}

OrderedList.propTypes = {
    data: PropTypes.array.isRequired,
    className: PropTypes.string,
}

OrderedList.defaultProps = {
    className: '',
}

export default OrderedList;