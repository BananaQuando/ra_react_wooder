import React, { Component } from 'react';

export default class CustomSlide extends Component {
    render() {
        const { index, ...props } = this.props;
        return (
            <div className="slider__item">
                <img src={props.image} alt="" />
            </div>
        );
    }
}