System.register(['@angular/core', '@angular/platform-browser-dynamic', '@angular/router', '@angular/common', '@angular/http', './components/app/app', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, platform_browser_dynamic_1, router_1, common_1, http_1, app_1;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            },
            function (_1) {}],
        execute: function() {
            platform_browser_dynamic_1.bootstrap(app_1.AppComponent, [
                router_1.ROUTER_PROVIDERS,
                core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy }),
                http_1.HTTP_PROVIDERS
            ]);
        }
    }
});
//# sourceMappingURL=main.js.map