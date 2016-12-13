youtubeAPI.controller('favoritesController', ['$http', 'dataFactory', 'AuthDataFactory', function($http, dataFactory, AuthDataFactory) {
    console.log('favoriteController up and running');

   myFunction();

    var myVar;

    function myFunction() {
        console.log('myfunction running');
        myVar = setTimeout(showPage, 1000);
    }

    function showPage() {
        console.log('hello');
        document.getElementById("loader").style.display = "none";
        document.getElementById("myDiv").style.display = "block";
    }

    var self = this;
    var arrayOfFavs = {};
    self.favId = [];
    id = "";
    var curEmail = AuthDataFactory.setCurrentEmail();

    self.getVideos = function() {
        $http.get('/favorites/' + curEmail)
            .then(function(response) {
                arrayOfFavs = response.data;
                arrayOfFavs.forEach(function(fav) {
                    self.favId.push(fav.vidid);
                });
            });
    }

    self.getVideos();


  self.deleteVid = function(vid) {
    console.log('vid is: ', vid);
    id = vid;

    $http.delete('/favorites/' + id + '/' + curEmail)
      .then(function(response){
        console.log('delete finsihsed');
        getVideos();
      })
  }

}]);
