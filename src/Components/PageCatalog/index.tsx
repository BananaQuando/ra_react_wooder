import React, {Component} from 'react';
import CatalogItem from '../CatalogItem';

export default class PageCatalog extends Component {
    render(){
        return(
            <>
                <CatalogItem />
                <CatalogItem inverse="catalog-item--inverse"/>
                <CatalogItem />
                <CatalogItem inverse="catalog-item--inverse"/>
                <CatalogItem />
            </>
        );
    }
}