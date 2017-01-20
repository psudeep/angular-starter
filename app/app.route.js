(function(angular) {
    var app = angular.module('testApp', ['ngRoute']);

    app.config(function($routeProvider, $locationProvider) {

        $routeProvider
            .when('/test', {
                templateUrl: 'app/components/app.html',
                controller: 'AuthController'
                
            })
            .when('/', {
                controller: 'GeneralController',
                templateUrl: 'app/components/app.html'
            })
            .otherwise({
                redirectTo: '/'
            });
        $locationProvider.html5Mode(true);
    });
}(window.angular));