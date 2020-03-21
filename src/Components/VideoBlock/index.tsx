import React, { Component } from 'react';
import ContextItem from '../ContextItem';

export default class VideoBlock extends Component {
    render() {
        return (
            <div className="video-block">
                <div className="video-block__background">
                    <img src="img/video-image.png" alt="" />
                </div>
                <div className="video-block__inner">
                    <ContextItem blockClass='context-item--light' buttonClass="button_with-border" />
                </div>
            </div>
        );
    }
}