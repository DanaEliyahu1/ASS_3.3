




angular.module("myApp").controller('resultsController', function ($scope, $http,$window,webService) {
  self=this;
  self.webService= webService;
  self.results=JSON.parse($window.sessionStorage.getItem("search"));




}); 
