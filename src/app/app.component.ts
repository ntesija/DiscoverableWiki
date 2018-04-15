import { Component, OnInit } from '@angular/core';
import { ListItem } from './list-group/list-group.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public planets: ListItem[];

    ngOnInit() {
        this.planets = [
            {
                text: 'N\'Zola',
                url: 'planets/nzola'
            },
            {
                text: 'Gorgon',
                url: 'planets/gorgon'
            },
            {
                text: 'No-zama',
                url: 'planets/nozama'
            }
        ]
    }
}
