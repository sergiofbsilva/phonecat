/**
 * Created with JetBrains WebStorm.
 * User: sujay
 * Date: 5/31/13
 * Time: 5:13 PM
 * To change this template use File | Settings | File Templates.
 */

/*
define(['services/services'],
    function(services){
        'use strict';
        services.factory('Config', ['$resource',
            function($resource){
                //console.log();
                var config = $resource("conf/config.json").get();
                var configObj = angular.fromJson(config);
                console.log(configObj["environments"]);
               config.environments.restUrl = function(env){
                    console.log(config.environments);
                    switch(env){
                        case "development":
                            return this.environments.development.baseUrl +
                                this.environments.development.database;
                        default:
                            return this.environments.development.baseUrl +
                                this.environments.development.database;
                    }
                };
                config.apiKey = function(env){
                    switch(env){
                        case "development":
                            return this.environments.development.apiKey ;
                        default:
                            return this.environments.development.apiKey;
                    }
                };

                return configObj;
            }]);
    }
);*/
