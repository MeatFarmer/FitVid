youtubeAPI.controller('optionsController', ['dataFactory', function(dataFactory) {
    console.log('optionsController up and running');



var self = this;

self.newOption = ['crossfit', 'yoga'];
self.newOption.time = "";
self.newOption.type = "";

// var workout = {
//   time : self.workout.time,
//   type : self.workout.type
// }

console.log(self.newOption.time);

// self.option1 = dataFatory.currentOption;
// self.option2 = dataFactory.currentOption

self.addOption = function() {
  console.log('adding option:', self.newOption.time + self.newOption.type);
  // dataFactory.options.push(self.newOption);
  dataFactory.addOption(self.newOption.time, self.newOption.type);
  console.log(dataFactory.currentOptions());

}


}]);
