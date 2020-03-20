import React, {Component} from 'react';
import MenuList from '../MenuList';

export default class Menu extends Component {
    render() {
        return(
            <div className="main-menu__list">
                <a href="/" className="logo logo--accent logo--lg">wooder</a>
                <MenuList />
            </div>
        );
    }
}