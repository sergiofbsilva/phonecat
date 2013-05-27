/**
 * Created with JetBrains WebStorm.
 * User: sujay
 * Date: 5/27/13
 * Time: 12:27 PM
 * To change this template use File | Settings | File Templates.
 */
require.config({
    paths:{
        angular: '/components/angular/angular.min',
        jquery: '/components/jquery',
        domReady: '/components/domready/ready.min',
        angularResource: '/components/angular-resource/angular-resource.min'
    },
    shim: {
        angular: {
            deps: ['jquery/jquery'],
            exports: 'angular'
        },
        angularResource: {
            deps:['angular']
        }
    }
});

require([
        'angular',
        'app',
        'domReady',
        'controllers/mainController',
        'directives/mydirective'
    ],
    function(angular, app, domReady){
        'use strict';
        app.config(['$routeProvider',
            function($routeProvider){
                $routeProvider.when('/', {
                    templateUrl: 'views/main.html',
                    controller: 'MainCtrl'
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
