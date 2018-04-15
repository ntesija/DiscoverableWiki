import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListGroupComponent } from './list-group/list-group.component';

const appRoutes: Routes = [
    { path: '', pathMatch: 'full', component: AppComponent }
]

@NgModule({
    declarations: [
        AppComponent,
        ListGroupComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes, {enableTracing: true})
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
