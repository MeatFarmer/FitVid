youtubeAPI.controller('favoritesController', ['$http', 'dataFactory', function($http, dataFactory) {
    console.log('favoriteController up and running');

      var self = this;
      var arrayOfFavs = {};
      self.favId = [];


      self.getVideos = function() {
          $http.get('/favorites')
              .then(function(response) {
                  arrayOfFavs = response.data;
                  console.log('arrayOfFavs', arrayOfFavs);
                  arrayOfFavs.forEach(function(fav) {
                    self.favId.push(fav.vidid);
                    });
                  console.log('favId', self.favId);
                  // updateFavorites();
          });
      }

      self.getVideos();
}]);
