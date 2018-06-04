import React, { Component } from "react";


class SearchInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "the lord of the rings",
        }
    }
    changeValue = (e) => {
        const value = e.target.value;
        this.setState({
            inputValue: value,
        })
    }
    render() {
        const { handleClick } = this.props;
        return (
            <div className="search-section">
                <input 
                    onChange={this.changeValue} 
                    value={this.state.inputValue}
                    type="text" 
                    className="search-inp" 
                    placeholder="Type to search"
                />
                
                <button 
                    onClick={() => handleClick(this.state.inputValue)} 
                    type="button" 
                    className="search-btn"
                >
                    Search
                </button>
            </div>
        )
    }
}

export default SearchInput;