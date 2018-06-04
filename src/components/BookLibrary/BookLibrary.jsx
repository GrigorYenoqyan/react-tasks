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
            found: 0,
            loading: false,
        }
    }

    searchBooks = (input) => {
        this.setState({
            data: [],
            loading: true,
        })

        let searchText = input.trim().toLowerCase().split(" ").join("+");
        fetch(`http://openlibrary.org/search.json?q=${searchText}`)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    data: data.docs,
                    found: data,
                    loading: false,
                })
            })

    }

    render() {
        const { data, found, loading } = this.state;
        console.log(data);
        return (
            <div className="main-container">
                {
                    loading ? 
                    <Loading /> :
                    null
                }
                <SearchInput 
                    handleClick={this.searchBooks} 
                />
                {
                    found ? <p>{found.numFound} found</p> : null
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