import React, { Component } from 'react';
import ContextItem from '../ContextItem';
import { IPostStore, IPostsStore } from '../../Stores/PostsStore';
import { inject, observer } from 'mobx-react';
import { observable } from 'mobx';

interface Props {
    postsStore?: IPostsStore,
    postStore?: IPostStore
}

@inject('postsStore')
@observer
export default class VideoBlock extends Component<Props> {

    @observable postStore = {} as IPostStore;

    async componentDidMount() {
        this.postStore = await this.props.postsStore.getPost(12);
    }

    render() {
        return (
            <div className="video-block">
                <div className="video-block__background">
                    <img src="img/video-image.png" alt="" />
                </div>
                <div className="video-block__inner">
                    <ContextItem contextData={this.postStore} blockClass='context-item--light' buttonClass="button_with-border" />
                </div>
            </div>
        );
    }
}