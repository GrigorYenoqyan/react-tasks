import React from "react";
import PropTypes from "prop-types";

const BookRow = ({ data }) => {
    return (
        <tr>
            <td>
                {data.title_suggest ? data.title_suggest : "-"}
            </td>
            <td>
                {data.author_name ? data.author_name : "-"}
            </td>
            <td>
                {data.first_publish_year ? data.first_publish_year : "-"}
            </td>
            <td>
                {
                    data.subject ? data.subject.slice(0, 5).join(", ") : "-"
                }
            </td>
        </tr>
    )
}

BookRow.propTypes = {
    data: PropTypes.object.isRequired,
}

export default BookRow;