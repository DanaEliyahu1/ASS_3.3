angular.module("myApp").controller('resultsController', function ($scope, $http,$window) {
  self=this;
  self.results=$window.sessionStorage.getItem("search");

}); 
