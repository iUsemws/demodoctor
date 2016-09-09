/**
 * PLUNKER VERSION (based on systemjs.config.js in angular.io)
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {

    var ngVer = '@2.0.0-rc.1'; // lock in the angular package version; do not let it float to current!

    //map tells the System loader where to look for things
    var  map = {
        'app':                        'app',

        '@angular':                   '../node_modules/@angular', // sufficient if we didn't pin the version
        'rxjs':                       '../node_modules/rxjs',
        'ts':                         '../node_modules/plugin-typescript/lib/',
        'typescript':                 '../node_modules/typescript/lib/typescript.js'
    };

    //packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app':                        { main: 'main.ts',  defaultExtension: 'ts' },
        'rxjs':                       { defaultExtension: 'js' },
        'ts': { main: 'plugin.js', defaultExtension: 'js' }
    };

    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'router'
    ];

    // Add map entries for each angular package
    // only because we're pinning the version with `ngVer`.
 /*   ngPackageNames.forEach(function(pkgName) {
        map['@angular/'+pkgName] = 'https://unpkg.com/@angular/' + pkgName + ngVer;
    });*/

    // Add package entries for angular packages
    ngPackageNames.forEach(function(pkgName) {

        // Bundled (~40 requests):
      //  packages['@angular/'+pkgName] = { main: pkgName + '.umd.js', defaultExtension: 'js' };

        // Individual files (~300 requests):
        packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
    });

    var config = {
        // DEMO ONLY! REAL CODE SHOULD NOT TRANSPILE IN THE BROWSER
        transpiler: 'ts',
        typescriptOptions: {
            tsconfig: true
        },
        meta: {
            'typescript': {
                "exports": "ts"
            }
        },
        map: map,
        packages: packages
    };

    System.config(config);

    System.import('app');

})(this);


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
