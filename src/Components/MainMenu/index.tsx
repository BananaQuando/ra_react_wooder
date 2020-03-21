import React, { Component } from 'react';
import SlidedownMenu from './SlidedownMenu';
import Menu from './Menu';
import Extras from './Extras';
import { IPageStore } from '../../Stores/PageStore';
import { observer, inject } from 'mobx-react';

interface Props {
    pageStore?: IPageStore
}

@inject('pageStore')
@observer
export default class MainMenu extends Component<Props>{

    OpenSlidedownMenu() {
        const body = document.querySelector('body');
        if (body === null) return;
        body.classList.toggle("menu-open");
    }

    render() {
        const { pathname } = this.props.pageStore;
        return (
            <div className={`main-menu ${ pathname !== '/' ? 'main-menu--black main-menu--small main-menu--relative' : ''}`}>
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