/**
 * Created with JetBrains WebStorm.
 * User: sujay
 * Date: 6/15/13
 * Time: 9:45 PM
 * To change this template use File | Settings | File Templates.
 */

'use strict';

define(['controllers/controllers'],
    function(controllers){
        'use strict';
        controllers.controller('LoginCtrl', ['$scope', function($scope){
            console.log('Login Controller invoked');
        }]);

});
