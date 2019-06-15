


angular.module("myApp").controller('showAttractionController', function ($scope, $http, $window, webService) {

  self = this;
  self.attractionName = $window.sessionStorage.getItem("attraction");

  $http.get('http://localhost:3000/view/viewAttraction/' + self.attractionName, {}, {

  })
    .then(function mySuccess(response) {
      self.currAttraction = response.data;

    }, function myError(response) {
      self.currAttraction = response.statusText;

    });

  self.addFavorite = function (attractionName,picture) {
    webService.addFavorite(attractionName,picture);
  }

  self.removeFavorite = function (attractionName) {
    webService.removeFavorite(attractionName);
  }
  /*
  $scope.saveAttraction = function(name) {
    //if name in attraction ok
  //if name not in attractions add.
  }

self.openAttraction=function(attractionName){
  webService.showAttraction(attractionName);

}

*/


});

