// categories controller




angular.module("myApp").controller('categoryController', function($scope, $http) {
  let myHeaders=new Headers();
  myHeaders.append('Content-Type','application/json');
  myHeaders.append('Accept','application/json');
  myHeaders.append("x-auth-token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im5pbXJvZCIsIm5hbWUiOiJuaW1yb2QiLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNTU5ODE0NTY2LCJleHAiOjE1NTk5MDA5NjZ9.jb_wcz4IWrVdXlG0mecawmbM19R7OgZss_Y5rJN7fuU");
  let options = new RequestOptions({ headers: myHeaders });
  $http.get('http://localhost:3000/view/getCategories',options)
 .then(function mySuccess(response) {
      $scope.categories = response.data;
    }, function myError(response) {
      $scope.categories = response.statusText;
  });
}); 
