




angular.module("myApp").controller('registerController',function($scope,webService,$window) {
    self=this;
  webService.getCategories().then(function mySuccess(response) {
    self.categories=response.data;
    
  }, function myError(response) {
    self.categories=response.statusText;
    
});
webService.getQuestions().then(function mySuccess(response) {
    self.questions=response.data;
    
  }, function myError(response) {
    self.questions=response.statusText;
    
});




  }); 
  