// $location.path('/results')
youtubeAPI.controller('optionsController', ['dataFactory', '$location', function(dataFactory, $location) {
    console.log('optionsController up and running');

    var self = this;
    self.string = '';

    // ***** options the user picked from the options pages ***** //
    self.newOption = {};
    self.newOption.workout = "";
    self.newOption.type = "";

    // ***** addOption function that adds user input for the youtubeAPI ***** //

    self.addOption = function() {
        self.string = self.newOption.workout + " " + self.newOption.type
        dataFactory.addOption(self.newOption);
        $location.path('/youtubeResults');
    }
}]);
