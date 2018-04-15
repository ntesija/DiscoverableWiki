import { Component, OnInit, Input } from '@angular/core';

export class ListItem {
    id: number;
    name: string;
}

@Component({
    selector: 'list-group',
    templateUrl: './list-group.component.html',
    styleUrls: ['./list-group.component.css']
})
export class ListGroupComponent implements OnInit {
    @Input() listType: string;
    @Input() items: ListItem[];

    ngOnInit() {
    }

}
