import {observable} from 'mobx';

export interface IPageStore {
    pathname ?: string,
    search   ?: string,
    hash     ?: string,
    state    ?: string,
    setData  ?: Function,
}

class PageStore implements IPageStore{
    @observable pathname;
    @observable search;
    @observable hash;
    @observable state;

    public setData(data: any){
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

// const pageStore = new PageStore();

export default PageStore;