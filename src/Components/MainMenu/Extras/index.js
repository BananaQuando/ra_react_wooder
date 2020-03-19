import React, {Component} from 'react';
import Languages from '../Languages';
import 'react-tippy/dist/tippy.css';
import {Tooltip} from 'react-tippy';

export default class Extras extends Component {
    render(){

        let languages = [
            "United Kingdom",
            "Italy",
            "Portugaly"
        ];

        return (
            <div className="extras">
                <a className="info-icon" data-tippy-content="This is tooltip content">
                    <img src="img/icons/info-icon.png" alt="Подробнее" />
                </a>
                <div className="language">
                    <Tooltip 
                        className="language__selected"
                        hideOnClick='true'
                        trigger="click"
                        interactive
                        position="bottom-end"
                        html={(
                            <div className="language__list">
                                <Languages languages={languages} />
                            </div>
                        )}
                    >
                        uk
                    </Tooltip>
                </div>
            </div>
        );
    }
}

