

angular.module("myApp").controller('homeController',function($scope, $http,webService) {
  self=this;
  //self.popular=webService.sendReq("GET","view/getRandomPopularAttractions","");
  //window.alert(JSON.stringify(webService.sendReq("GET","view/getRandomPopularAttractions","")));
  
  $http.get('http://localhost:3000/view/getLastAttractions',{},{
    /*headers:myHeaders {
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
     /*headers:myHeaders{
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
   
  })
 .then(function mySuccess(response) {
      self.popular = response.data;
      
    }, function myError(response) {
      self.popular = response.statusText;
      
  });
}); 
