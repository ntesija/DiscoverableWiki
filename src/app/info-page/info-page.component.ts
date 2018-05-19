import { Component, OnInit, SimpleChanges, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListItem } from '../list-group/list-group.component';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';
import { ImageService } from '../services/image-service.service';

@Component({
    selector: 'info-page',
    templateUrl: './info-page.component.html',
    styleUrls: ['./info-page.component.css']
})
export class InfoPageComponent implements OnInit {
    public info: ListItem;
    public type: string;

    private unknownItem: ListItem = {
        description: 'No description available',
        discovered: false,
        id: 0,
        image: 'fallback.png',
        name: 'Unknown'
    }

    constructor(
        private http: HttpClient,
        private route: ActivatedRoute,
        public imageService: ImageService) { }

    ngOnInit() {
        this.route.paramMap
            .switchMap((params: ParamMap, index: number) => {
                const id = params.get('id');
                this.type = this.route.routeConfig.path.split('/')[0];
                return this.http.get(`api/${this.type}/${id}`);
            }).subscribe((item: ListItem) => {
                if (!item.discovered) {
                    this.info = this.unknownItem;
                } else {
                    this.info = item;
                }
            }, () => {
                this.info = this.unknownItem;
            });
    }

}
