import { Component, OnInit, SimpleChanges, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListItem } from '../list-group/list-group.component';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'info-page',
    templateUrl: './info-page.component.html',
    styleUrls: ['./info-page.component.css']
})
export class InfoPageComponent implements OnInit {
    public info: ListItem;

    constructor(
        private http: HttpClient,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.paramMap
            .switchMap((params: ParamMap, index: number) => {
                const id = params.get('id');
                return this.http.get(`api/${this.route.routeConfig.path.split('/')[0]}/${id}`);
            }).subscribe((item: ListItem) => {
                this.info = item;
            })
    }

}
