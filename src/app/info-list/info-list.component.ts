import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListItem } from '../list-group/list-group.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageService } from '../services/image-service.service';

@Component({
    selector: 'info-list',
    templateUrl: './info-list.component.html',
    styleUrls: ['./info-list.component.css']
})
export class InfoListComponent implements OnInit {
    public items: ListItem[];
    public type: string;

    constructor(
        private http: HttpClient,
        private route: ActivatedRoute,
        private router: Router,
        public imageService: ImageService) { }

    ngOnInit() {
        this.type = this.route.routeConfig.path;
        this.http.get(`api/${this.type}`)
            .subscribe((items: ListItem[]) => {
                this.items = items;
            });
    }

    public goToPage(id: string) {
        this.router.navigate([`${this.type}/${id}`]);
    }
}
