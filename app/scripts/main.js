/**
 * Created with JetBrains WebStorm.
 * User: sujay
 * Date: 5/27/13
 * Time: 12:27 PM
 * To change this template use File | Settings | File Templates.
 */
require.config({
    baseUrl: 'scripts/',
    paths:{
        angular: 'components/angular/angular.min',
        jquery: 'components/jquery/jquery.min',
        twitterBootstrap: 'components/bootstrap/docs/assets/js/bootstrap.min',
        domReady: 'components/domready/ready.min',
        angularResource: 'components/angular-resource/angular-resource.min',
        properties: 'conf/properties',
        config: 'conf/Config'
    },
    shim: {
        angular: {
            deps: ['jquery'],
            exports: 'angular'
        },
        angularResource: {
            deps:['angular']
        },
        twitterBootstrap:{
            deps:['jquery']
        }
    }
});

require([
        'angular',
        'angularResource',
        'app',
        'domReady',
        'twitterBootstrap',
        'properties',
        'config',
        'services/configurationService',
        'services/phoneService',
        'controllers/phoneController',
        'filters/checkMarkFilter',
        'directives/mydirective'

    ],
    function(angular, angularResource, app, domReady){
        'use strict';
        app.config(['$routeProvider', '$locationProvider',
            function($routeProvider, $locationProvider){

                $routeProvider.when('/', {
                    controller: 'PhoneCtrl',
                    resolve:{
                        phones: function(PhoneListLoader){
                          return PhoneListLoader();
                        }
                    },
                    templateUrl: 'views/phone-list.html'
                });
                $routeProvider.when('/phone/:id',{
                    controller: 'ShowPhoneCtrl',
                    resolve:{
                        phone: function(PhoneLoader){
                            return PhoneLoader();
                        }
                    },
                    templateUrl: 'views/phone-detail.html'
                });
            }

        ]);
        domReady(function() {
            angular.bootstrap(document, ['phonecatApp']);

            // The following is required if you want AngularJS Scenario tests to work
            $('html').addClass('ng-app: phonecatApp');
        });
    }
);
