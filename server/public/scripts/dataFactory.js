youtubeAPI.factory('dataFactory', [function() {
    console.log("data factory running");

    var options = [];
    console.log(options);


    function addOption(newOption) {
        options.push(newOption);


    }

    function optionList() {
        return options;

    }
    // public

    var publicApi = {
        currentOptions: optionList,
        addOption: addOption
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
