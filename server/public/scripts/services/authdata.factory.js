youtubeAPI.factory('AuthDataFactory', ["$http", function($http) {
    console.log('AuthDataFactory running');

    var currentUser = null;
    var currentEmail = "";


    function setEmail(email) {
        currentEmail = email;
        return currentEmail;

    }

    function setCurrentEmail() {
        return currentEmail;
    }

    function setCurrentUser(theUser) {
        currentUser = theUser;
        return currentUser;
    }

    function getCurrentUser() {
        return currentUser;
    }

    var authApi = {
        setCurrentUser: setCurrentUser,
        getCurrentUser: getCurrentUser,
        setEmail: setEmail,
        setCurrentEmail: setCurrentEmail

    };

    return authApi;

}]);
