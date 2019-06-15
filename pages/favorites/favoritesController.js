


angular.module("myApp").controller('favoritesController', function ($window, webService) {
  self = this;
  self.condition="";
  self.favorites = JSON.parse($window.sessionStorage.getItem("favorites"));
  if ($window.sessionStorage.getItem("username") != "guest") {
    for (var i = 0; i < self.favorites.length; i++) {
      self.favorites[i].isFavorite = webService.isFavorite(self.favorites[i].attractionName);
    }
  }

  self.saveAttractions = function () {
    webService.updateMyAttractionSort().then(function mySuccess(response) {
      $window.alert(response.data);

    }, function myError(response) {
      $window.alert(response.data);

    });

  }

  self.webService = webService;

  self.addFavorite = function (attractionName, picture) {
    webService.addFavorite(attractionName, picture);
    for (var i = 0; i < self.favorites.length; i++) {
      if (self.favorites[i].attractionName == attractionName) {
        self.favorites[i].isFavorite = true;
      }
    }
  }

  self.removeFavorite = function (attractionName) {
    webService.removeFavorite(attractionName);
    for (var i = 0; i < self.favorites.length; i++) {
      if (self.favorites[i].attractionName == attractionName) {
        self.favorites[i].isFavorite = false;
      }
    }

  }
  ///********************************************************************************************************** */
  self.orderByRating=function(){
    for (var i=0;i<self.favorites.length;i++){
      webService.getRating(self.favorites[i].attractionName,i)
      .then(function mySuccess(response) {
        for(var j=0;j<self.favorites.length;j++){
          if(self.favorites[j].attractionName==response.data[0].rating){
            self.favorites[j].rating=response.data[0].rating;
          }
        }
        
  
      }, function myError(response) {
        
  
      });
      
    }
    self.condition="rating";
  }


  self.orderByCategory=function(){
    self.favorites=webService.orderByCategory(self.favorites);
  }


}); 
