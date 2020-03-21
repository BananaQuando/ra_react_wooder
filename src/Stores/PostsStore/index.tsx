import { observable, action } from 'mobx';

export interface IPostsStore {
    postsList  ?: IPostsList,
    getAllPosts?: Function,
}

export interface IPostsList {
	[key: number] : IPostStore
}

export interface IPostStore {
    userId?: number,
    id?: number,
    title?: string,
    body?: string,
}

export default class PostsStore implements IPostsStore {

    @observable postsList: IPostsList = {};

    @action async getAllPosts() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        const posts = await response.json();
        if (posts) {
            posts.forEach((post: IPostStore) => {
                this.postsList[post.id] = {
                    userId: post.userId,
                    id    : post.id,
                    title : post.title,
                    body  : post.body,
                };
            });
        }
    }
}