import { Component, OnInit, SimpleChanges, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListItem } from '../list-group/list-group.component';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';
import { ImageService } from '../services/image-service.service';
import { NgForm } from '@angular/forms';
import { of } from 'rxjs/observable/of';

@Component({
    selector: 'info-page',
    templateUrl: './info-page.component.html',
    styleUrls: ['./info-page.component.css']
})
export class InfoPageComponent implements OnInit {
    public hiddenData: ListItem;
    public info: ListItem;
    public type: string;
    public isEditing: boolean;

    private isNew: boolean;

    private unknownItem: ListItem = {
        description: 'No description available',
        discovered: false,
        id: -1,
        image: 'fallback.png',
        name: 'Unknown'
    }

    private newItem: ListItem = {
        description: '',
        discovered: false,
        image: 'fallback.png',
        name: ''
    }

    constructor(
        private http: HttpClient,
        private route: ActivatedRoute,
        public imageService: ImageService) {
        this.isEditing = false;
        this.isNew = false;
    }

    ngOnInit() {
        this.route.paramMap
            .switchMap((params: ParamMap, index: number) => {
                const id = params.get('id');
                this.type = this.route.routeConfig.path.split('/')[0];
                if (id !== 'new') {
                    return this.http.get(`api/${this.type}/${id}`);
                } else {
                    this.isEditing = true;
                    this.isNew = true;
                    return Observable.of(this.newItem)
                }
            }).subscribe((item: ListItem) => {
                this.setData(item);
            }, () => {
                this.info = this.unknownItem;
                this.hiddenData = null;
            });
    }

    public edit() {
        this.isEditing = true;
    }

    public onSubmit(formData: NgForm) {
        this.isEditing = false;

        if (this.isNew) {
            return this.http.post<ListItem>(`api/${this.type}`, this.hiddenData)
                .subscribe((item: ListItem) => {
                    this.setData(item);
                });
        } else {
            return this.http.put<ListItem>(`api/${this.type}/${this.hiddenData.id}`, this.hiddenData)
                .subscribe((item: ListItem) => {
                    this.setData(item);
                });
        }
    }

    private setData(item: ListItem) {
        if (!item.discovered) {
            this.info = this.unknownItem;
        } else {
            this.info = item;
        }
        this.hiddenData = item;
    }
}
