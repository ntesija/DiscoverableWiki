import { Component, OnInit } from '@angular/core';
import { ListItem } from './list-group/list-group.component';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(private http: HttpClient) { }

    public planets: ListItem[];

    ngOnInit() {
        this.http.get('api/planets')
            .subscribe((response: ListItem[]) => {
                this.planets = response
            });
    }
}
