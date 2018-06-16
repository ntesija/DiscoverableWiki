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
     *  The list of api endpoints to hit. This will display in the navigation and on the home component
     */
    private navItems: NavigationItem[] = [
        { endpoint: 'planets', title: 'Planets' },
        { endpoint: 'colonies', title: 'Colonies' },
        { endpoint: 'factions', title: 'Factions' },
    ];

    public getNavigationItems(): NavigationItem[] {
        return this.navItems;
    }
}
