import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListGroupComponent } from './list-group/list-group.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { HomeComponent } from './home/home.component';
import { InfoListComponent } from './info-list/info-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ImageService } from './services/image-service.service';
import { FormsModule } from '@angular/forms';
import { NavService, NavigationItem } from './services/nav-service.service';

let appRoutes: Routes = [
    { path: 'planets/:id', component: InfoPageComponent },
    { path: 'planets', component: InfoListComponent, pathMatch: 'full' },
    { path: 'colonies/:id', component: InfoPageComponent },
    { path: 'colonies', component: InfoListComponent, pathMatch: 'full' },
    { path: 'factions/:id', component: InfoPageComponent },
    { path: 'factions', component: InfoListComponent, pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent }
]

@NgModule({
    declarations: [
        AppComponent,
        ListGroupComponent,
        InfoPageComponent,
        HomeComponent,
        InfoListComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        FormsModule
    ],
    providers: [
        ImageService,
        NavService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    /**
     * The list of api endpoints available
     */
    private endpoints: NavigationItem[] = [
        { endpoint: 'planets', title: 'Planets' },
        { endpoint: 'colonies', title: 'Colonies' },
        { endpoint: 'factions', title: 'Factions' },
    ]

    constructor(navService: NavService) {
        navService.setNavigationItems(this.endpoints);

        for (let endpoint of this.endpoints) {
            appRoutes.push({path: `${endpoint.endpoint}/:id`, component: InfoPageComponent});
            appRoutes.push({path: endpoint.endpoint, component: InfoListComponent, pathMatch: 'full'});
        }
        appRoutes.push(
            { path: 'home', component: HomeComponent },
            { path: '', redirectTo: '/home', pathMatch: 'full' },
            { path: '**', component: NotFoundComponent });
    }
}
