angular.module("myApp").controller('categoryController', function($scope, $http,webService) {
 let myHeaders=new Headers();
  myHeaders.append('Content-Type','application/json');
  myHeaders.append('Accept','application/json');
  myHeaders.append("x-auth-token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im5pbXJvZCIsIm5hbWUiOiJuaW1yb2QiLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNTU5ODE0NTY2LCJleHAiOjE1NTk5MDA5NjZ9.jb_wcz4IWrVdXlG0mecawmbM19R7OgZss_Y5rJN7fuU");
  //let options = new RequestOptions({ headers: myHeaders });
  self=this;
  self.test="hi,testing";
  var req={
    method: 'GET',
    url: 'http://localhost:3000/view/getCategories',
    data:{
      
      x:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im5pbXJvZCIsIm5hbWUiOiJuaW1yb2QiLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNTYwMzM5NTcyLCJleHAiOjE1NjA0MjU5NzJ9.Dbm-eiSMJkIyId2npSQDN1435LMaOe4r-Ojmd2r95Mc'
// x-auth-token
    }

  }
  $http(req)
 .then(function mySuccess(response) {
      self.test="finished Request success";
      self.categories = response.data;
      
    }, function myError(response) {
      self.test="finished Request fail"+JSON.stringify(response);
      self.categories = response.statusText;
      
  });
}); 

