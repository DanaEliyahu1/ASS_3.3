


angular.module("myApp").controller('showAttractionController', function($scope, $http,$window,webService) {
 let myHeaders=new Headers();
  myHeaders.append('Content-Type','application/json');
  myHeaders.append('Accept','application/json');
  myHeaders.append("x-auth-token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im5pbXJvZCIsIm5hbWUiOiJuaW1yb2QiLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNTU5ODE0NTY2LCJleHAiOjE1NTk5MDA5NjZ9.jb_wcz4IWrVdXlG0mecawmbM19R7OgZss_Y5rJN7fuU");
  //let options = new RequestOptions({ headers: myHeaders });
  self=this;
  self.attractionName=$window.sessionStorage.getItem("attraction");
  $http.get('http://localhost:3000/view/viewAttraction/'+self.attractionName,{},{
    headers:myHeaders /*{
      'Accept': 'application/json',
      'x-auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im5pbXJvZCIsIm5hbWUiOiJuaW1yb2QiLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNTU5OTkwMzMwLCJleHAiOjE1NjAwNzY3MzB9.pBJiKGP5fUP-MGLa-yIeoHdJofus-u_EQGoSEybZD38'
    }*/
  })
 .then(function mySuccess(response) {
      self.currAttraction = response.data;
      
    }, function myError(response) {
      self.currAttraction = response.statusText;
      
  });

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

