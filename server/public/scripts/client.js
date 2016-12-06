var animalAPI = angular.module('animalAPI', ['ngRoute']);

animalAPI.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/cat', {
            templateUrl: '/views/templates/cat.html',
            controller: 'catController',
            controllerAs: 'cat'
        })
        .when('/dog', {
            templateUrl: '/views/templates/dog.html',
            controller: 'dogController',
            controllerAs: 'dog'
        })
        .when('/fish', {
            templateUrl: '/views/templates/fish.html',
            controller: 'fishController',
            controllerAs: 'fish'
        })
        .otherwise({
            redirectTo: '/dog'
        });
}]);
