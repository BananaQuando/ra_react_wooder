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
export default class AboutUsBlock extends Component<Props> {

    @observable postStore = {} as IPostStore;

    async componentDidMount(){
        this.postStore = await this.props.postsStore.getPost(6);
        console.log(this.postStore);
    }

    render() {
        return (
            <div className="about-us-block">
                <div className="about-us-block__image">
                    <img src={this.postStore.url} alt="" />
                </div>
                <ContextItem contextData={this.postStore} buttonClass="button_light" />
                <div className="about-us-block__title-decor">about us</div>
            </div>
        );
    }
}