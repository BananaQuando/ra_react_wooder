import React, {Component} from 'react';
import Languages from './Languages';
import SlidedownMenu from './SlidedownMenu';
import Menu from './Menu';
import Extras from './Extras';

export default class MainMenu extends Component {

    OpenSlidedownMenu(){
        const hamburger = document.querySelector('.hamburger');
        const body = document.querySelector('body');
    
        body.classList.toggle("menu-open");
    }

    render() {
        return (
        <div className="main-menu">
            <SlidedownMenu />
            <div className="hamburger" onClick={this.OpenSlidedownMenu}>
                <div className="hamburger__icon">
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
                <div className="hamburder__title">menu</div>
            </div>
            <Menu />
            <Extras />
        </div>
        );
    }
}