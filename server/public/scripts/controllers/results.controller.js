youtubeAPI.controller('resultsController', ['$http', 'dataFactory',
    'AuthDataFactory',
    function($http, dataFactory, AuthDataFactory) {
        console.log('resultsController up and running');

        // ***** load loading spinner while results populate ***** //

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


        // ***** grab videos from API and append to DOM ***** //

        var options = {};
        var key = 'AIzaSyA31Ve2pMIxU2kgzdf_wGDNH7dsmTA58L4';
        var self = this;

        var search = "";
        var type = "";
        var workout = "";
        var email = "";

        var searchResults = dataFactory.currentOptions();
        type = searchResults[0].type;
        workout = searchResults[0].workout + ' workout';
        email = AuthDataFactory.setCurrentEmail();

        var arrayOfVideos = {};
        self.vidId = [];
        self.video = {};
        self.title = '';
        self.videoid = '';

        self.getVideo = function() {
            var query = 'https://www.googleapis.com/youtube/v3/search';
            query += '?part=snippet';
            query += '&q=' + ' ' + type + ' ' + workout;
            query += '&maxResults=5';
            query += '&key=' + key;

            var request = encodeURI(query) + '&callback=JSON_CALLBACK';

            $http.jsonp(request).then(function(response) {
                self.video = response;
                console.log(response);
                arrayOfVideos = self.video.data.items;
                arrayOfVideos.forEach(function(vid) {
                    self.vidId.push(vid.id.videoId);
                    console.log('videoId', self.videoId);
                });
                search = dataFactory.stringVar();
            });
        }

        self.getVideo();

        // ***** Add Favorite Video to DB ***** //

        self.addFavorite = function(index) {
            console.log(index);
            console.log('self', self.vidId);
            $http.post('/favorites', {
                    vidid: self.vidId[index],
                    email: email
                })
                .then(function(response) {},
                    function(response) {
                        // error
                        console.log('ERROR response: ', response.data);
                    });
        }
    }
]);
