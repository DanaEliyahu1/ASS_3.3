// categories controller




angular.module("myApp").controller('categoryController', function($scope, $http) {
  $http({
    method : "GET",
    url : "http://127.0.0.1:3000/view/getCategories" , 
    headers :{
        'x-auth-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im5pbXJvZCIsIm5hbWUiOiJuaW1yb2QiLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNTU5NzQzOTc2LCJleHAiOjE1NTk4MzAzNzZ9.hkqRxcFudzWysvggfHGAoCWflHW3khoKlh_H8TtZpcU",
   
        'Content-Type':'application/json'
    }
  }).then(function mySuccess(response) {
      $scope.categories = response.data;
    }, function myError(response) {
      $scope.categories = response.statusText;
  });
});