import React, { Component } from 'react';

interface Props {
    image: string
}

export default class CustomSlide extends Component <Props>{
    render() {
        return (
            <div className="slider__item">
                <img src={this.props.image} alt="" />
            </div>
        );
    }
}