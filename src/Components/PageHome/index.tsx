import React, {Component} from 'react';
import Slider from '../Slider';
import CatalogBlock from '../CatalogBlock';
import AdvantagesBlock from '../AdvantagesBlock';
import VideoBlock from '../VideoBlock';
import AboutUsBlock from '../AboutUsBlock';
import { IPageStore } from '../../Stores/PageStore';
import { observer, inject } from 'mobx-react';

interface Props {
    pagesStore: IPageStore
}

@inject('pageStore')
@observer
class PageHome extends Component <Props> {
    
    render() {
        
        // const {} = this.props.pagesStore

        console.log(this.props);
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