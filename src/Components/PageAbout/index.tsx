import { RouteProps } from 'react-router';
import React, {Component} from 'react';
import AboutUsBlock from '../AboutUsBlock';
import GoogleMap from '../GoogleMap';
import { IPageStore } from '../../Stores/PageStore';
import { observer, inject } from 'mobx-react';

interface Props {
    pageStore?: IPageStore
}

@inject('pageStore')
@observer
export default class PageAbout extends Component<Props & RouteProps> {

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
            <>
                <AboutUsBlock />
                <GoogleMap />
            </>
        );
    }
}