import React, { Component } from "react";
import PropTypes from "prop-types";

class SearchInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
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

SearchInput.propTypes = {
    handleClick: PropTypes.func.isRequired,
}

export default SearchInput;