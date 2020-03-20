import React, {Component} from 'react';
import CatalogItem from '../CatalogItem';

export default class CatalogBlock extends Component {
    render(){
        return(
            <div id="catalog-block" className="catalog-block">
                <CatalogItem />
                <CatalogItem inverse="catalog-item--inverse" />
            </div>
        );
    }

}