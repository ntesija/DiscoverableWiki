import { Injectable } from '@angular/core';
import { ListItem } from '../list-group/list-group.component';

@Injectable()
export class ImageService {

    constructor() { }

    public getImageSrc(item: ListItem, type: string): string {
        if (item && item.image && item.discovered && type) {
            return `assets/images/${type}/${item.image}`;
        }

        return `assets/images/${type}/fallback.png`;
    }

    public getImageSrcFromFile(file: string, folder: string): string {
            return `assets/images/${folder}/${file}`;
    }
}
