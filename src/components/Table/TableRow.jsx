import React, { Component} from "react";
import PropTypes from "prop-types";

class TableRow extends Component {
    render() {
        const { data } = this.props;

        return (
           <tr>
               <th className="student-cell">{data.name}</th>
               <th className="student-cell">{data.age}</th>
               <th className="student-cell">{data.grade}</th>
           </tr>
        )
    }
}

TableRow.propTypes = {
    data: PropTypes.object.isRequired,
}

export default TableRow;