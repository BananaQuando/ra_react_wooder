import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class AdvantagesItem extends Component {
    render(){
        return(
            <Link to="#" className="advantages-item">
                <div className="advantages-item__video-wrapper">
                    <div className="advantages-item__video-image">
                        <img src="img/advantages-item-1.jpg" alt="advantages-item-1" />
                    </div>
                    <div className="video-play"></div>
                </div>
                <div className="advantages-item__title advantages-item__title--top-bordered">
                    Innovative Design
                </div>
            </Link>
        );
    }
}