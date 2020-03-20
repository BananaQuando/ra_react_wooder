import {observable} from 'mobx';

export interface IPageStore {
    pathname: string,
    search: string,
    hash: string,
    state: string,
}

class PageStore implements IPageStore{
    @observable pathname;
    @observable search;
    @observable hash;
    @observable state;

    setData(data){
        if (data.pathname)
            this.pathname = data.pathname;
        if (data.search)
            this.search = data.search;
        if (data.hash)
            this.hash = data.hash;
        if (data.state)
            this.state = data.state;
    }
}

const pageStore = new PageStore();

export default pageStore;