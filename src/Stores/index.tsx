import PageStore from './PageStore';

interface Stores {
    [key: string]: any
}

export const stores: Stores = {
    pageStore: PageStore,
}