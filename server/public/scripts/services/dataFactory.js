youtubeAPI.factory('dataFactory', [function() {
    console.log("data factory running");

    var options = [];
    var string = {};
    console.log('dataFactory', options);

    function addOption(newOption) {
        options.push(newOption);
    }

    function optionList() {
        return options;
    }

    function stringVar (string) {
        return string;
    }

    var publicApi = {
        currentOptions: optionList,
        addOption: addOption,
        stringVar: stringVar
    };
    return publicApi;


}]);
