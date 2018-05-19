import React, { Component} from "react";
import PropTypes from "prop-types";
import TableRow from "./TableRow";
import StudentHeader from "../StudentsTable/StudentHeader";

class Table extends Component {
    render() {
        const {data, handleClick} = this.props;
        return (
            <table className="student-table">
                <thead>
                    <StudentHeader handleClick={handleClick}/>
                </thead>
                <tbody>
                    {
                        data.map((student) => <TableRow data={student} key={student.id}/>)
                    }
                </tbody>
            </table>
        );
    }
}

Table.propTypes = {
    data: PropTypes.array.isRequired,
    handleClick: PropTypes.func.isRequired,
}

export default Table;