import React, { Component } from 'react';
import CatalogItem from '../CatalogItem';
import { IPostsStore } from '../../Stores/PostsStore';
import { inject, observer } from 'mobx-react';
import { observable } from 'mobx';

interface Props {
    postsStore?: IPostsStore,
    firstTwoPosts?: any[],
}

@inject('postsStore')
@observer
export default class CatalogBlock extends Component<Props> {

    @observable firstTwoPosts = [];

    async componentWillMount() {

        await this.props.postsStore.getAllPosts();

        const { postsList } = this.props.postsStore;
        let counter = 0;

        for (const id in postsList) {
            if (counter > 1) break;


            if (postsList.hasOwnProperty(id)) {
                const post = postsList[id];
                
                this.firstTwoPosts.push(post.id);
            }
            counter++;
        }
    }

    render() {
        console.log(this.firstTwoPosts)
        return (
            <div id="catalog-block" className="catalog-block">
                {
                    this.firstTwoPosts ? this.firstTwoPosts.map((id, index) => (
                        index % 2 == 0 
                        ? <CatalogItem key={index} postId={id} /> 
                        : <CatalogItem key={index} inverse='catalog-item--inverse' postId={id} />
                    ))
                    : ''
                }
            </div>
        );
    }

}