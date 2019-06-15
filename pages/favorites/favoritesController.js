


angular.module("myApp").controller('favoritesController', function($window, webService) {
  self=this;
 
 self.favorites=JSON.parse($window.sessionStorage.getItem("favorites"));
  self.saveAttractions = function() {
    webService.updateMyAttractionSort().then(function mySuccess(response) {
      $window.alert(response.data);
      
    }, function myError(response) {
      $window.alert(response.data);
      
  });
    //if name in attraction ok
  //if name not in attractions add.
  }





}); 
