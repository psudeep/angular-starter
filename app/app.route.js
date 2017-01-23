(function(angular) {
    var app = angular.module('testApp', ['ngRoute','ngToast']);

    app.config(function($routeProvider, $locationProvider) {

        $routeProvider
            .when('/forgot-password', {
                templateUrl: 'app/components/views/forgot_password.html',
                controller: 'AuthController'
                
            })
            .when('/login', {
                controller: 'AuthController',
                templateUrl: 'app/components/views/signin.html'
            })
            .when('/test', {
                controller: 'GeneralController',
                templateUrl: 'app/components/app.html'
            })
            .otherwise({
                redirectTo: '/'
            });
        //$locationProvider.html5Mode(true);
    });
}(window.angular));