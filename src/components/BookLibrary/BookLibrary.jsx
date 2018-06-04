import React, { Component } from 'react';
import BookTable from "./BookTable";
import SearchInput from "./SearchInput";
import Loading from "../Loading/Loading";

import "./BookLibrary.css";

class BookLibrary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            found: null,
            loading: false,
        }
    }

    addIdToObject = (arr) => {
        arr.forEach((el, index) => el.id = index);
    }

    getBooksData = (input) => {
        this.setState({
            data: null,
            found: null,
            loading: true,
        })

        let searchText = input.trim().toLowerCase().split(" ").join("+");
        fetch(`http://openlibrary.org/search.json?q=${searchText}`)
            .then((response) => response.json())
            .then((data) => {
                this.addIdToObject(data.docs);
                this.setState({
                    data: data.docs,
                    found: data.numFound,
                    loading: false,
                })
            })

    }

    render() {
        const { data, found, loading } = this.state;
        return (
            <div className="main-container">
                {
                    loading ? 
                    <Loading /> :
                    null
                }
                <SearchInput 
                    handleClick={this.getBooksData} 
                />
                {
                    data ? <p className="count">{found} found</p> : null
                }
                {
                    data && data.length ? 
                    <BookTable data={data} /> :
                    null
                }

            </div>
        )
    }
}

export default BookLibrary;