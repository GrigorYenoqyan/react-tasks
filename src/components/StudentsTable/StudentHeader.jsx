import React, { Component} from "react";
import PropTypes from "prop-types";


class StudentHeader extends Component {
    render() {
       return (
        <tr>
            <th className="student-cell t-headers">Name</th>
            <th className="student-cell t-headers">
                Age
                <span 
                    onClick={this.props.handleClick} 
                    className='sort-icon'
                >
                    &#8597;    
                </span>
            </th>
            <th className="student-cell t-headers">Average Grade</th>
        </tr>
       )
    }
}

StudentHeader.propTypes = {
    handleClick: PropTypes.func.isRequired,
}

export default StudentHeader;