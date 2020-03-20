import React, {Component} from 'react';
import ContextItem from '../ContextItem';

export default class AboutUsBlock extends Component{
    render(){
        return(
            <div className="about-us-block">
                <div className="about-us-block__image">
                    <img src="img/about-us-image.jpg" alt="" />
                </div>
                <ContextItem buttonClass="button_light" />
                <div className="about-us-block__title-decor">about us</div>
            </div>
        );
    }
}