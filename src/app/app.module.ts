import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListGroupComponent } from './list-group/list-group.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { HomeComponent } from './home/home.component';
import { InfoListComponent } from './info-list/info-list.component';

const appRoutes: Routes = [
    { path: 'planets/:id', component: InfoPageComponent },
    { path: 'planets', component: InfoListComponent, pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: AppComponent }
]

@NgModule({
    declarations: [
        AppComponent,
        ListGroupComponent,
        InfoPageComponent,
        HomeComponent,
        InfoListComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
