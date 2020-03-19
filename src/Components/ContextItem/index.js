import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class ContextItem extends Component {

    
    render(){
        const { blockClass, buttonClass } = this.props;

        return(
            <div className={`context-item ${blockClass}`}>
                <div className="context-item__title">
                    furniture
                </div>
                <div className="context-item__description">
                    Wooder utilizes materials otherwise left behind, rendered useless in their original intent. By
                    creating new pieces made of reclaimed barnwood
                </div>
                <div className="context-item__button"> 
                    <Link to="#" className={`button ${buttonClass}`}>learn more</Link>
                </div>
            </div>
        );
    }
}