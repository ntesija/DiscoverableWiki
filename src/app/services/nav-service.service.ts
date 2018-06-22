import { Injectable } from '@angular/core';

export class NavigationItem {
    /**
     * The endpoint to call
     */
    endpoint: string;

    /**
     * The title to display for navigation
     */
    title: string;
}

@Injectable()
export class NavService {

  constructor() { }

    /**
     *  The list of api endpoints to hit.
     */
    private navItems: NavigationItem[];

    public setNavigationItems(navItems: NavigationItem[]) {
        this.navItems = navItems;
    }

    public getNavigationItems(): NavigationItem[] {
        return this.navItems;
    }
}
