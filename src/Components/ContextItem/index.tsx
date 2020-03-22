import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {IPostStore} from '../../Stores/PostsStore';
import { inject, observer } from "mobx-react";
import { observable } from 'mobx';

interface Props {
    contextData?: IPostStore,
    buttonClass?: string,
    blockClass?: string,
}

@inject('contextData')
@observer
export default class ContextItem extends Component <Props>{
    
    render(){
        const { blockClass, buttonClass } = this.props;
        const {
            title,
            body
        } = this.props.contextData;
        return(
            <div className={`context-item ${blockClass}`}>
                <div className="context-item__title">
                    {title}
                </div>
                <div className="context-item__description">
                    {body}
                </div>
                <div className="context-item__button"> 
                    <Link to="#" className={`button ${buttonClass}`}>learn more</Link>
                </div>
            </div>
        );
    }
}