youtubeAPI.controller('optionsController', ['dataFactory', function(dataFactory) {
  console.log('optionsController up and running');



  var self = this;

  self.newOption = [];
  self.newOption.time = "";
  self.newOption.type = "";


  console.log();

  self.addOption = function() {
    console.log('adding option:' + self.newOption.time + ' ' + self.newOption.type);
    // dataFactory.options.push(self.newOption);
    dataFactory.addOption(self.newOption);
    console.log(dataFactory.currentOptions());

  }


}]);
