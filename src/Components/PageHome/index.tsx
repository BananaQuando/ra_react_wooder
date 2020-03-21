import { RouteProps } from 'react-router';
import React, { Component } from 'react';
import Slider from '../Slider';
import CatalogBlock from '../CatalogBlock';
import AdvantagesBlock from '../AdvantagesBlock';
import VideoBlock from '../VideoBlock';
import AboutUsBlock from '../AboutUsBlock';
import { IPageStore } from '../../Stores/PageStore';
import { observer, inject } from 'mobx-react';

interface Props {
    pageStore?: IPageStore
}

@inject('pageStore')
@observer
class PageHome extends Component<Props & RouteProps> {

    componentDidMount(){
        const pageData = {
            pathname: this.props.location.pathname,
            search  : this.props.location.search,
            hash    : this.props.location.hash,
            state   : this.props.location.state,
        };
        this.props.pageStore.setData(pageData);
    }

    render() {
        
        return (
            <>
                <Slider />
                <CatalogBlock />
                <AdvantagesBlock />
                <VideoBlock />
                <AboutUsBlock />
            </>
        );
    }
}

export default PageHome;