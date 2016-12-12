youtubeAPI.controller('logInController', ["$firebaseAuth", '$http', 'AuthDataFactory',
'dataFactory', function($firebaseAuth, $http, AuthDataFactory, dataFactory) {
    console.log('logInController up and running');

    var auth = $firebaseAuth();
    var self = this;
    var email = "";
    self.currentUser = null;
    self.favorites = {};


    self.logIn = function() {
        auth.$signInWithPopup("google").then(function(firebaseUser) {
            console.log("Firebase authenticaed in controller as ", firebaseUser.user.displayName);
            email = firebaseUser.user.email
            self.currentUser = firebaseUser.user;
            console.log(self.currentUser);
            AuthDataFactory.setCurrentUser(self.currentUser);
            AuthDataFactory.setEmail(email);
            console.log(email);

        });
    };

    // This code runs whenever the user changes authentication states
    auth.$onAuthStateChanged(function(user) {
        if (user) {
            user.getToken().then(function(data) {});
        }
    });

    // This code runs when the user logs out
    self.logOut = function() {
        auth.$signOut().then(function() {
            self.currentUser = {};
            AuthDataFactory.setCurrentUser(null);
            self.favorites = {};
            console.log('Logging the user out!');
        });
    };


    self.message = "Welcome!"
}]);
