var youtubeAPI = angular.module('youtubeAPI', ['ngRoute', 'firebase']);

youtubeAPI.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/favorites', {
            templateUrl: '/views/templates/favorites.html',
            controller: 'favoritesController',
            controllerAs: 'favs'
        })
        .when('/logIn', {
            templateUrl: '/views/templates/logIn.html',
            controller: 'logInController',
            controllerAs: 'logIn'
        })
        .when('/options', {
            templateUrl: '/views/templates/options.html',
            controller: 'optionsController',
            controllerAs: 'options'
        })
        .when('/youtubeResults', {
            templateUrl: '/views/templates/youtubeResults.html',
            controller: 'resultsController',
            controllerAs: 'results'
        })
        .otherwise({
            redirectTo: '/logIn'
        });
}]);

youtubeAPI.filter('youtubeEmbedUrl', function ($sce) {
    return function(videoId) {
      return $sce.trustAsResourceUrl('http://www.youtube.com/embed/' + videoId);
    };
  });
