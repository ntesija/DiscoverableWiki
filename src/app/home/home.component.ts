import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListItem } from '../list-group/list-group.component';
import { NavigationItem, NavService } from '../services/nav-service.service';

export class HomeNav extends NavigationItem {
    listItems?: ListItem[];
}

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public navItems: HomeNav[];

    constructor(
        private http: HttpClient,
        navService: NavService
    ) {
        this.navItems = navService.getNavigationItems();
    }

    ngOnInit() {
        for (let nav of this.navItems) {
            this.http.get(`api/${nav.endpoint}`)
            .subscribe((response: ListItem[]) => {
                nav.listItems = response;
            });
        }
    }
}
