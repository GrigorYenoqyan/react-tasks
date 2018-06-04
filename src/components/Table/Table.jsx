import React from "react";
import PropTypes from "prop-types";
import TableRow from "./TableRow";
import StudentHeader from "../StudentsTable/StudentHeader";

const Table = ({ data, handleClick }) => {
        console.log(data);
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

Table.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    handleClick: PropTypes.func.isRequired,
}

export default Table;