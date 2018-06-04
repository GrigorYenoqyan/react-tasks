import React, { Component } from "react";

import BookRow from "./BookRow";

class BookTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: [],
        }
    }

    render() {
        const { data, found } = this.props;
        return (
            <div className="table-section">
                {/* <p className="count">{found} total found</p> */}
                <div className="control-pages">
                    
                </div>
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
                            data.map(row => <BookRow data={row} />)
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default BookTable;