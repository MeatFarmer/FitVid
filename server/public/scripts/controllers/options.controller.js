youtubeAPI.controller('optionsController', ['dataFactory', function(dataFactory) {
    console.log('optionsController up and running');

// var newOption = ['crossfit', 'yoda'];
var self = this;
self.newOption = "";

// self.option1 = dataFatory.currentOption;
// self.option2 = dataFactory.currentOption

self.addOption = function() {
  console.log('adding option:', self.newOption);
  // dataFactory.options.push(self.newOption);
  dataFactory.addOption(self.newOption);
  console.log(dataFactory);

}


}]);
