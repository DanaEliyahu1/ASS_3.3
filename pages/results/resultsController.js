




angular.module("myApp").controller('resultsController', function ($scope, $http, $window, webService) {
  self = this;
  self.webService = webService;
  self.results = JSON.parse($window.sessionStorage.getItem("search"));
  if ($window.sessionStorage.getItem("username") != "guest") {
    for (var i = 0; i < self.results.length; i++) {
      self.results[i].isFavorite = webService.isFavorite(self.results[i].attractionName);
    }
  }
  self.addFavorite = function (attractionName, picture) {
    webService.addFavorite(attractionName, picture);
    for (var i = 0; i < self.results.length; i++) {
      if (self.results[i].attractionName == attractionName) {
        self.results[i].isFavorite = true;
      }

    }
  }

  self.removeFavorite = function (attractionName) {
    webService.removeFavorite(attractionName);
    for (var i = 0; i < self.results.length; i++) {
      if (self.results[i].attractionName == attractionName) {
        self.results[i].isFavorite = false;
      }

    }

  }


}); 
