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
        .controller('AuthController', ['$scope', '$http',
            function($scope, $http) {
                console.log("Hello")
                $scope.title = "Prashant";


            }
        ]);
})(window.angular);