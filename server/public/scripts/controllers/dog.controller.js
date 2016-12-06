animalAPI.controller('dogController', ['$http', function($http) {
    console.log('dogController up and running');
    var key = 'fdc4fa785ddc6dca4bbe895233717593';
    var self = this;

    self.animal = {};

    self.getRandomPet = function() {
        var query = 'http://api.petfinder.com/';
        query += 'pet.getRandom';
        query += '?key=' + key;
        query += '&format=json';
        query += '&output=basic';
        query += '&breed=dog';
        var request = encodeURI(query) + '&callback=JSON_CALLBACK';

        console.log('Request:', request);

        $http.jsonp(request).then(function(response) {
            console.log('response', response);
            self.animal = response.data.petfinder.pet;
        });

    }

    self.getRandomPet();

    self.message = "Welcome!"
}]);
