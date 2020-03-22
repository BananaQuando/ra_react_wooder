import PageStore from './PageStore';
import PostsStore from './PostsStore';
import ImagesStore from './ImagesStore';

interface Stores {
    [key: string]: any
}

export const stores: Stores = {
    pageStore: new PageStore(),
    postsStore: new PostsStore(),
    imagesStore: new ImagesStore(),
}