//
angular.module('myApp')
// Add new controller to angular.module('myApp')
        .controller('TopSpotsController', TopSpotsController);

// Create a fucntion for the .controller with the same name as the function name
    function TopSpotsController($http) {
        var vm = this;

      $http
          .get('topspots.json')
          .then(function(response){
            vm.places = response.data
          }
        );
}
