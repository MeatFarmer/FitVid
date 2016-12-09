youtubeAPI.controller('favoritesController', ['$http', 'dataFactory', function($http, dataFactory) {
    console.log('favoriteController up and running');

      getVideos();

      function getEmployees() {
          $http.get('/employees')
              .then(function(response) {
                  self.empArray = response.data;
                  updateSalary();
              });
      }


      // remove an employee
      self.toggleActiveEmployee = function(id) {
        console.log('employee id: ', id);
        $http.put('/employees/' + id)
          .then(function(response) {
            console.log('updated employee');
            getEmployees();
          });
      }
}]);
