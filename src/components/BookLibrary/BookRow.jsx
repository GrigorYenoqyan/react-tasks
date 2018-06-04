import React, { Component } from "react";

class BookRow extends Component {
    render() {
        const { data } = this.props;
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
}

export default BookRow;