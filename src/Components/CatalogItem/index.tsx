import React, { Component } from 'react';
import ContextItem from '../ContextItem';
import { IPostsStore, IPostStore } from '../../Stores/PostsStore';
import { inject, observer } from "mobx-react";
import { observable } from 'mobx';

interface Props {
    postsStore?: IPostsStore,
    postStore?: IPostStore,
    inverse?: string,
    postID?: number,
}

@inject('postsStore')
@observer
export default class CatalogItem extends Component<Props>{

    @observable postStore = {} as IPostStore;

    async componentDidMount() {
        const { postID } = this.props;

        this.postStore = await this.props.postsStore.getPost(postID);
    }

    render() {
        const { inverse } = this.props;
        const {
            id,
            title,
            url
        } = this.postStore;

        return (
            <div className={`catalog-item ${inverse ? inverse : ''}`}>
                <div className="catalog-item__content">
                    <ContextItem contextData={this.postStore} buttonClass="button_light" />
                    <div className="catalog-item__number">
                        {id} <span></span>
                    </div>
                </div>
                <div className="catalog-item__image">
                    <img src={url} alt="image" />
                </div>
                <div className="catalog-item__title-decor">{title}</div>
            </div>
        );
    }

}