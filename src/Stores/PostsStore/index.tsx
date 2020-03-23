import { observable, action } from 'mobx';
import ImagesStore, { IImagesStore } from '../ImagesStore';

export interface IPostsStore {
    postsList: IPostsList,
    getAllPosts: Function,
    getPost: Function,
}

export interface IPostStore {
    userId: number,
    id: number,
    title: string,
    body: string,
    url?: string,
    thumbnailUrl?: string,
}

export interface IPostsList {
    [key: number]: IPostStore
}

export interface IPostResponce {
    userId: number,
    id: number,
    title: string,
    body: string,
}

export default class PostsStore implements IPostsStore {

    @observable postsList = {} as IPostsList;
    imagesStore: IImagesStore = new ImagesStore();

    @action async getAllPosts() {
        console.log('async getAllPosts');
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (!this.imagesStore.imagesList) await this.imagesStore.getAllImages();
        const posts = await response.json();
        if (posts) {
            posts.forEach(async (post: IPostResponce) => {
                this.postsList[post.id] = await this.formatPostResponce(post);
            });
        }
    }

    @action async formatPostResponce(data: IPostResponce) {
        const imageData = await this.imagesStore.getImage(data.id);

        return {
            userId: data.userId,
            id: data.id,
            title: data.title,
            body: data.body,
            url: imageData.url,
            thumbnailUrl: imageData.thumbnailUrl,
        }
    }

    @action async getPost(postID: number) {

        if (this.postsList[postID]) {
            return this.postsList[postID];
        } else {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`);
            const data: IPostStore = await response.json();

            this.postsList[postID] = await this.formatPostResponce(data);
            return this.postsList[postID];
        }
    }
}