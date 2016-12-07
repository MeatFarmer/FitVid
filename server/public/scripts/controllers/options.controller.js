youtubeAPI.controller('optionsController', ['dataFactory', function(dataFactory) {
  console.log('optionsController up and running');



  var self = this;

  self.newOption = {};
  self.newOption.workout = "";
  self.newOption.type = "";


  console.log();

  self.addOption = function() {
    console.log('adding option:' + self.newOption.workout + ' ' + self.newOption.type);
    // dataFactory.options.push(self.newOption);
    dataFactory.addOption(self.newOption);
    console.log('factory', dataFactory.currentOptions());

  }


}]);
