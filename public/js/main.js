/**
 * Require configuration.  Load angular from shim and export the
 * `angular` value.  This uses a CDN to load angular, but that
 * is not necessary.  A local file will work just fine.
 */
require.config({                                                                
  shim: {                                                                     
    angular: {                                                              
      exports: 'angular', 
    },
    angularRoute: ['angular'],
    angularMocks: {
      deps: ['angular'],
      exports: 'angular.mock'
    }
  },                                                                          
  paths: {                                                                    
    angular: 'lib/angular',
    angularRoute: 'lib/angular-route',
    angularMocks: 'lib/angular-mocks',
  },
  baseUrl: 'public/js'                                                                         
});      

// window.name = "NG_DEFER_BOOTSTRAP!";                                                                       
var log = console.log;

require([

  'angular',
  'app',
  'routes'

], function (

  ng,
  app,
  routes

){
    
  // since were async loading our scripts using requirejs, we need to wait until the document is ready,
  // then manually bootstrap the app (only after declaring our controllers)
  ng.element(document).ready(function() {

    ng.bootstrap(document, ['app']);
  
  });

  /**
   * require.js / r.js do not play nice with Angular loading in some cases
   *
   * Rather than create an app via `ng-app`, you can do the bootstrapping
   * here using `angular.bootstrap`
   *
   * Of course, you can use any element.  Doesn't have to be `<html>`
   *
   * Note that https://github.com/tnajdek/angular-requirejs-seed
   * uses `window.name = "NG_DEFER_BOOTSTRAP!";`  I don't know why, but it
   * doesn't actually seem to be necessary.  If it is and you know why,
   * let me know!
   */

});