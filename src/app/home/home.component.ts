import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListItem } from '../list-group/list-group.component';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    constructor(private http: HttpClient) { }

    public planets: ListItem[];
    public colonies: ListItem[];
    public factions: ListItem[];

    ngOnInit() {
        this.http.get('api/planets')
            .subscribe((response: ListItem[]) => {
                this.planets = response;
            });
        this.http.get('api/colonies')
            .subscribe((response: ListItem[]) => {
                this.colonies = response;
            }); 
        this.http.get('api/factions')
            .subscribe((response: ListItem[]) => {
                this.factions = response;
            });
    }
}
