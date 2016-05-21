"use strict";
var core_1 = require('@angular/core');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var http_1 = require('@angular/http');
var app_1 = require('./components/app/app');
platform_browser_dynamic_1.bootstrap(app_1.AppComponent, [
    router_1.ROUTER_PROVIDERS,
    core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy }),
    http_1.HTTP_PROVIDERS
]);
//# sourceMappingURL=main.js.map