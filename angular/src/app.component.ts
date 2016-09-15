import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {HTTP_PROVIDERS} from '@angular/http';

import {PageDetailComponent} from './page-detail.component';
import {PagesComponent} from './pages.component';
import {DashboardComponent} from './dashboard.component';

import {PageService} from './page.service';

@Component({
    selector: 'ad-app',
    template: `<router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES],
    precompile: [
        PageDetailComponent,
        PagesComponent,
        DashboardComponent
    ],
    providers: [
        PageService,
        HTTP_PROVIDERS
    ]
})
export class AppComponent {
    title = 'Angular Django';
}
