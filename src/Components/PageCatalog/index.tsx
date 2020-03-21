import { RouteProps } from 'react-router';
import React, {Component} from 'react';
import CatalogItem from '../CatalogItem';
import { IPageStore } from '../../Stores/PageStore';
import { observer, inject } from 'mobx-react';

interface Props {
    pageStore?: IPageStore
}

@inject('pageStore')
@observer
export default class PageCatalog extends Component<Props & RouteProps> {

    componentDidMount(){
        const pageData = {
            pathname: this.props.location.pathname,
            search  : this.props.location.search,
            hash    : this.props.location.hash,
            state   : this.props.location.state,
        };
        this.props.pageStore.setData(pageData);
    }

    render(){
        
        return(
            <div className="catalog-block">
                <CatalogItem />
                <CatalogItem inverse="catalog-item--inverse"/>
                <CatalogItem />
                <CatalogItem inverse="catalog-item--inverse"/>
                <CatalogItem />
            </div>
        );
    }
}