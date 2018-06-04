import React from "react";
import PropTypes from "prop-types";

import BookRow from "./BookRow";

const BookTable = ({ data }) => {
    return (
        <div className="table-section">
            <table className="book-table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author Name</th>
                        <th>First publish year</th>
                        <th>Subject</th>
                    </tr>
                </thead>
                <tbody className="book-body">
                    {
                        data.map(row => <BookRow data={row} key={row.id} />)
                    }
                </tbody>
            </table>
        </div>
    );
}

BookTable.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default BookTable;