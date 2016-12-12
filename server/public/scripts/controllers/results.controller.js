youtubeAPI.controller('resultsController', ['$http', 'dataFactory',
'AuthDataFactory', function($http, dataFactory, AuthDataFactory) {
    console.log('resultsController up and running');

    // ***** grab videos from API and append to DOM ***** //

    var options= {};
    var key = 'AIzaSyA31Ve2pMIxU2kgzdf_wGDNH7dsmTA58L4';
    var self = this;

    var search = "";
    var type = "";
    var workout = "";
    var email = "";

    var searchResults = dataFactory.currentOptions();
    type = searchResults[0].type;
    workout = searchResults[0].workout + ' workout';
    console.log('concat' + ' ' + type + ' ' + workout);

    email = AuthDataFactory.setCurrentEmail();
    console.log('email is:', email);

    var arrayOfVideos  = {};
    self.vidId = [];
    self.video = {};
    self.title = '';
    self.videoid = '';
;

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
  $http.post('/favorites', {vidid : self.vidId[index]})
    .then(function(response) {
      // cool
      console.log('response: ', response.data);
      // make GET request for employee data
      // self.newEmployee = {};
      // getEmployees();
    },
    function(response) {
      // error
      console.log('ERROR response: ', response.data);
    });
}

}]);






//***********************************************************//


// youtubeAPI.controller('resultsController', ['$http', function($http) {
//     console.log('resultsController up and running');
//     var self = this;
//     self.videos = {};
//
//     self.getYoutubeVids = function () {
//     var request = gapi.client.youtube.search.list({
//          part: "snippet",
//          type: "video",
//          q: "CrossFit Leg Workout Video",
//         //  q: encodeURIComponent($("#search").val()),
//          maxResults: 3,
//          order: "viewCount",
//          publishedAfter: "2015-01-01T00:00:00Z"
//
//        })
//      };
//
//
//         console.log('Request:', request);
//
//         $http.jsonp(request).then(function(response) {
//             console.log(response);
//             var results = response.result;
//             self.title = response.item.snippet.title;
//             self.videoid = response.item.id.videoId;
//             console.log('self.title');
//         });
//
//     }
//
//
//     function init() {
//         gapi.client.setApiKey("AIzaSyA31Ve2pMIxU2kgzdf_wGDNH7dsmTA58L4");
//         gapi.client.load("youtube", "v3", function() {
//             // yt api is ready
//         });
//
//         self.getYoutubeVids();
//
// }]);

// *********************************************************//

//
// $(function() {
//     $("form").on("submit", function(e) {
//        e.preventDefault();
//        // prepare the request
//
//        var request = gapi.client.youtube.search.list({
//             part: "snippet",
//             type: "video",
//             q: encodeURIComponent($("#search").val()).replace(/%20/g, "+"),
//             maxResults: 3,
//             order: "viewCount",
//             publishedAfter: "2015-01-01T00:00:00Z"
//        });
//
//        // execute the request
//        request.execute(function(response) {
//           var results = response.result;
//           console.log(results);
//           $("#results").html("");
//           $.each(results.items, function(index, item) {
//             $.get("./views/item.html", function(data) {
//                 $("#results").append(tplawesome(data, [{"title":item.snippet.title, "videoid":item.id.videoId}]));
//             });
//           });
//           resetVideoHeight();
//        });
//     });
//
//     $(window).on("resize", resetVideoHeight);
// });
//
// function resetVideoHeight() {
//     $(".video").css("height", $("#results").width() * 9/16);
// }
//
// function init() {
//     gapi.client.setApiKey("AIzaSyA31Ve2pMIxU2kgzdf_wGDNH7dsmTA58L4");
//     gapi.client.load("youtube", "v3", function() {
//         // yt api is ready
//     });
// }
