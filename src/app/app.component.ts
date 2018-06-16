import { Component } from '@angular/core';
import { NavService, NavigationItem } from './services/nav-service.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public navItems: NavigationItem[];

    constructor(navService: NavService) {
        this.navItems = navService.getNavigationItems();
    }
 }
