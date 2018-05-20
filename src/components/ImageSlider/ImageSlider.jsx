import React, { Component } from 'react';
import ButtonArrow from "./ButtonArrow";
import ImageContainer from "./ImageContainer";
import "./ImageSlider.css";

class ImageSlider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            indexes: [0, 1, 2],
        }
    }

    componentDidMount() {
        this.intervalId = setInterval(() => this.changeImage("right"), 2000);
    }

    componentDidUpdate() {
        clearInterval(this.intervalId);
        this.intervalId = setInterval(() => this.changeImage("right"), 2000);
    }
    
    changeImage = (dir) => {
        let indexesCopy = this.state.indexes;

        if (dir === "right") { 
            indexesCopy.unshift(indexesCopy.pop())
        } else if (dir === "left") {
            indexesCopy.push(indexesCopy.shift())
        }

        this.setState({
            indexes: indexesCopy,
        })
    }

    render() {
        const { indexes } = this.state;
        return (
            <div>
                <ButtonArrow dir="left" changeImage={this.changeImage} />
                <ImageContainer indexes={indexes} />
                <ButtonArrow dir="right" changeImage={this.changeImage} />
            </div>
        )
    }
}

export default ImageSlider;