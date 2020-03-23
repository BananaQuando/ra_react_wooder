import { RouteProps } from 'react-router';
import React, { Component } from 'react';
import CatalogItem from '../CatalogItem';
import { IPageStore } from '../../Stores/PageStore';
import { observer, inject } from 'mobx-react';
import { IPostsStore } from '../../Stores/PostsStore';
import { observable } from 'mobx';

interface Props {
    pageStore?: IPageStore,
    postsStore?: IPostsStore,
    formatCatalogBlocks?: Function
}

@inject('pageStore')
@inject('postsStore')
@observer
export default class PageCatalog extends Component<Props & RouteProps> {

    async componentDidMount() {
        const pageData = {
            pathname: this.props.location.pathname,
            search: this.props.location.search,
            hash: this.props.location.hash,
            state: this.props.location.state,
        };
        this.props.pageStore.setData(pageData);
        await this.props.postsStore.getAllPosts();
        
    }

    @observable catalogItems(){
        const { postsList } = this.props.postsStore;
        const catalogItemsId = [] as number[];
        for (const id in postsList) {
            if (postsList.hasOwnProperty(id)) {
                const post = postsList[id];

                catalogItemsId.push(post.id);
            }
        }

        return catalogItemsId.map((id, index) => (
            index % 2 == 0
                ? <CatalogItem key={index} postID={id} />
                : <CatalogItem key={index} postID={id} inverse="catalog-item--inverse" />
        ));
    }

    render() {
        return (
            <div className="catalog-block">
                { this.catalogItems() }
            </div>
        );
    }
}