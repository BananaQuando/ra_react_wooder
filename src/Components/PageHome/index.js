import React, {Component} from 'react';
import Slider from '../Slider';
import CatalogBlock from '../CatalogBlock';
import AdvantagesBlock from '../AdvantagesBlock';
import VideoBlock from '../VideoBlock';
import AboutUsBlock from '../AboutUsBlock';

export default class PageHome extends Component {
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