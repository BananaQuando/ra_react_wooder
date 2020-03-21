import PageStore from './PageStore';
import PostsStore from './PostsStore';

interface Stores {
    [key: string]: any
}

export const stores: Stores = {
    pageStore: new PageStore(),
    postsStore: new PostsStore(),
}