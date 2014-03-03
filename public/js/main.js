/**
 * Require configuration.  Load angular from shim and export the
 * `angular` value.
 */
require.config({                                                                
  shim: {    
    socketio: {
      exports: 'io'
    },                                                                 
    angular: {                                                              
      exports: 'angular', 
    },
    angularRoute: ['angular'],
    angularMocks: {
      deps: ['angular'],
      exports: 'angular.mock'
    },
    angularResource: {
      deps: ['angular']
    }
  },                                                                          
  paths: {                                                                    
    angular: 'lib/angular',
    angularRoute: 'lib/angular-route',
    angularMocks: 'lib/angular-mocks',
    angularResource: '//cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.0rc3/angular-resource.min.js',
    socketio: "/socket.io/socket.io"
  },
  baseUrl: 'public/js'                                                                         
});

require([

  'angular',
  'app',
  'routes'

], function(ng) {
    
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