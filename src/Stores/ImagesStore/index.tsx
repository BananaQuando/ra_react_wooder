import { observable, action } from 'mobx';

export interface IImagesStore {
    imagesList?: IImagesList,
    getAllImages?: Function,
    getImage?: Function,
}

export interface IImagesList {
    [key: number]: IImageStore
}

export interface IImageStore {
    albumId?: number,
    id?: number,
    title?: string,
    url?: string,
    thumbnailUrl?: string,
}

export default class ImagesStore implements IImagesStore {

    @observable imagesList: IImagesList = {};

    @action async getAllImages() {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');

        const images = await response.json();
        if (images) {
            images.forEach((image: IImageStore) => {
                this.imagesList[image.id] = this.formatImageResponce(image);
            });
        }
    }

    formatImageResponce(data: IImageStore) {
        return {
            albumId: data.albumId,
            id: data.id,
            title: data.title,
            url: data.url,
            thumbnailUrl: data.thumbnailUrl,
        }
    }

    @action async getImage(imageID: number) {
        if (this.imagesList[imageID]) {
            return this.imagesList[imageID];
        } else {
            const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${imageID}`);
            const data: IImageStore = await response.json();
            this.imagesList[imageID] = this.formatImageResponce(data);
            return this.imagesList[imageID];
        }
    }
}