// $location.path('/results')
youtubeAPI.controller('optionsController', ['dataFactory', '$location', function(dataFactory, $location) {
    console.log('optionsController up and running');

    var self = this;
    self.string = '';

    self.newOption = {};
    self.newOption.workout = "";
    self.newOption.type = "";

    console.log();

    self.addOption = function() {
        console.log('adding option:' + self.newOption.workout + ' ' + self.newOption.type);
        // dataFactory.options.push(self.newOption);
        self.string = self.newOption.workout + " " + self.newOption.type
        console.log('this is the string var' + self.string);
        dataFactory.addOption(self.newOption);
        $location.path('/youtubeResults');


    }
}]);
