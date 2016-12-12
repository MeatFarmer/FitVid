
youtubeAPI.factory('AuthDataFactory', ["$http", function($http) {
  console.log('AuthDataFactory running');

  var currentUser = null;

  function setCurrentUser(theUser) {
    currentUser = theUser;
    return currentUser;
  }

  function getCurrentUser(){
      return currentUser;
  }

  var authApi = {
    setCurrentUser: setCurrentUser,
    getCurrentUser: getCurrentUser

  };

  return authApi;

}]);
