import { Component, OnInit, Input } from '@angular/core';

export class ListItem {
    text: string;
    url: string;
}

@Component({
    selector: 'list-group',
    templateUrl: './list-group.component.html',
    styleUrls: ['./list-group.component.css']
})
export class ListGroupComponent implements OnInit {
    @Input() header: string;
    @Input() items: ListItem[];

    ngOnInit() {
    }

}
