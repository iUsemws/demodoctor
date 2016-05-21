import {enableProdMode, provide} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS} from '@angular/router';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {HTTP_PROVIDERS} from '@angular/http';
import {AppComponent} from './components/app/app';
import 'rxjs/Rx';

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy }),
    HTTP_PROVIDERS
]);
