import React from "react";
import PropTypes from "prop-types";

const TableRow = ({ data }) => {
        return (
           <tr>
               <th className="student-cell">{data.name}</th>
               <th className="student-cell">{data.age}</th>
               <th className="student-cell">{data.grade}</th>
           </tr>
        )
}

TableRow.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        grade: PropTypes.number.isRequired,
    }).isRequired,
}

export default TableRow;