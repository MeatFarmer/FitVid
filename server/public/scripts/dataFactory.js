youtubeAPI.factory('dataFactory', [function() {
    console.log("data factory running");

    var options = [];
    // console.log('dataFactory', options);

    function addOption(newOption) {
        options.push(newOption);
    }

    function optionList() {
        return options;
    }

    var publicApi = {
        currentOptions: optionList,
        addOption: addOption
    };
    return publicApi;
    console.log('dataFactory', options);

}]);
