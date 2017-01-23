(function(angular) {
    'use strict';
    angular.module('testApp')
        .controller('mainController', ['$scope', '$http',
            function($scope, $http) {
                  console.log("Hello");
            }
        ])
        .controller('GeneralController', ['$scope', '$http',
            function($scope, $http) {
                $scope.title = "Prashant";
                $scope.data = [];
                $scope.getData = function() {
                    $http.defaults.headers.common['Authorization'] = '';
                    $http.get("http://127.0.0.1:9000/api/v1/get.expenses")
                        .then(function(response) {
                            $scope.data = response.data;

                        });
                };
                $scope.getData();
            }
        ])
        .controller('AuthController', ['$scope','ngToast', '$http',
            function($scope, $http) {
                console.log("Hello")
                $scope.title = "Prashant";

                $scope.login = function() {
                    var data = {username: $scope.name, password: $scope.password };
                    console.log(data);
                    var req = {
                     method: 'POST',
                     url: 'http://localhost:8081/v1/auth/login',
                     headers: {
                       'Content-Type': 'application/json',
                       'Method': 'json'
                     },
                     data: data
                    };
                    $http(req);
                    ngToast.create('a toast message...');
                    // $http.post("http://localhost:8081/v1/auth/login", data, {
                    //     headers: { 'Content-Type': 'application/json','Method': 'json'},
                    //     transformRequest: transform
                    // }).success(function(responseData) {
                    //     //do stuff with response
                    //     console.log(responseData);
                    // });
                }
                $scope.login();
            }
        ]);
})(window.angular);