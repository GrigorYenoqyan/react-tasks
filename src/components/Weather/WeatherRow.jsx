import React from "react";
import PropTypes from "prop-types";

const WeatherRow = ({ data }) => {
    return (
        <tr>
            <td>{new Date(data.date).getDate()}</td>
            <td>{data.day}</td>
            <td>{data.high}</td>
            <td>{data.low}</td>
            <td>{data.text}</td>
        </tr>
    )
}

WeatherRow.propTypes = {
    data: PropTypes.objectOf(PropTypes.string).isRequired,
}

export default WeatherRow;