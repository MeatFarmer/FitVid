
youtubeAPI.factory('dataFactory', [function() {
  console.log("data factory running");

  var options = ["crossfit", "yoga"];
  console.log(options);


  function addOption(newOption) {
      options.push(newOption);
      console.log(newOption);
}

  function optionList(newOption) {
    addOption(newOption);
  }
  // public

var publicApi = {
  currentOptions: options,
  addOption: optionList
};
  return publicApi;
}]);
  




//   var publicApi = {
//     optionList: function () {
//       return optionList(newOption);
//
//     },
//     addOption: function () {
//       return addOption(newOption);
//
//     }
//
//   };
//
//   return publicApi;
//
// }]);
