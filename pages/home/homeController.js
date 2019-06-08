angular.module("myApp").controller('homeController', function($scope, $http) {
 let myHeaders=new Headers();
  myHeaders.append('Content-Type','application/json');
  myHeaders.append('Accept','application/json');
  myHeaders.append("x-auth-token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im5pbXJvZCIsIm5hbWUiOiJuaW1yb2QiLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNTU5ODE0NTY2LCJleHAiOjE1NTk5MDA5NjZ9.jb_wcz4IWrVdXlG0mecawmbM19R7OgZss_Y5rJN7fuU");
  //let options = new RequestOptions({ headers: myHeaders });
  self=this;
  $http.get('http://localhost:3000/view/getLastAttractions',{},{
    headers:myHeaders /*{
      'Accept': 'application/json',
      'x-auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im5pbXJvZCIsIm5hbWUiOiJuaW1yb2QiLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNTU5OTkwMzMwLCJleHAiOjE1NjAwNzY3MzB9.pBJiKGP5fUP-MGLa-yIeoHdJofus-u_EQGoSEybZD38'
    }*/
  })
 .then(function mySuccess(response) {
      self.lastSaved = response.data;
      
    }, function myError(response) {
      self.lastSaved = response.statusText;
      
  });
  $http.get('http://localhost:3000/view/getMostPopularAttractionForUser',{},{
    headers:myHeaders /*{
      'Accept': 'application/json',
      'x-auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im5pbXJvZCIsIm5hbWUiOiJuaW1yb2QiLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNTU5OTkwMzMwLCJleHAiOjE1NjAwNzY3MzB9.pBJiKGP5fUP-MGLa-yIeoHdJofus-u_EQGoSEybZD38'
    }*/
  })
 .then(function mySuccess(response) {
      self.recommended = response.data;
      
    }, function myError(response) {
      self.recommended = response.statusText;
      
  });
  $http.get('http://localhost:3000/view/getRandomPopularAttractions',{},{
    headers:myHeaders /*{
      'Accept': 'application/json',
      'x-auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im5pbXJvZCIsIm5hbWUiOiJuaW1yb2QiLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNTU5OTkwMzMwLCJleHAiOjE1NjAwNzY3MzB9.pBJiKGP5fUP-MGLa-yIeoHdJofus-u_EQGoSEybZD38'
    }*/
  })
 .then(function mySuccess(response) {
      self.popular = response.data;
      
    }, function myError(response) {
      self.popular = response.statusText;
      
  });
}); 
