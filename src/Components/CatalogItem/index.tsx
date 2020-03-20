import React, { Component } from 'react';
import ContextItem from '../ContextItem';

interface Props {
    inverse?: string,
}

export default class CatalogItem extends Component <Props>{

    render(){
        const { inverse } = this.props;
        return(
            <div className={`catalog-item ${ inverse ? inverse : ''}` }>
                <div className="catalog-item__content">
                    <ContextItem buttonClass="button_light" />
                    <div className="catalog-item__number">
                        01 <span></span>
                    </div>
                </div>
                <div className="catalog-item__image">
                    <img src="img/catalog-item-1.jpg" alt="image" />
                </div>
                <div className="catalog-item__title-decor">furniture</div>
            </div>
        );
    }

}