import React, { Component } from 'react';
import MenuList from '../MenuList';

export default class SlidedownMenu extends Component {
    render() {
        return (
            <div className="slidedown-menu">
                <div className="slidedown-menu__content">
                    <MenuList />
                </div>
            </div>
        );
    }
}