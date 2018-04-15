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

    ngOnInit() {
        this.http.get('api/planets')
            .subscribe((response: ListItem[]) => {
                this.planets = response
            });
    }
}
