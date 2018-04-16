import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListItem } from '../list-group/list-group.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'info-list',
    templateUrl: './info-list.component.html',
    styleUrls: ['./info-list.component.css']
})
export class InfoListComponent implements OnInit {
    public items: ListItem[];

    constructor(
        private http: HttpClient,
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        this.http.get(`api/${this.route.routeConfig.path}`)
            .subscribe((items: ListItem[]) => {
                this.items = items;
            });
    }

    public goToPage(id: string) {
        this.router.navigate([`${this.route.routeConfig.path}/${id}`]);
    }
}
