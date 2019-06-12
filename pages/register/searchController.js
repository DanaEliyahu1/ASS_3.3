
// login controller


//angular.module("myApp")
app.controller("loginController", function ($scope,webService,$window) {
 
    var username1=username.value;
    var password1=password.value;
   $scope.login=function(){   //$window.alert(JSON.stringify(username.value));
  var result= webService.login(username.value,password.value).then(function(response){
    $window.alert(response.data)


  },function(error){$window.alert(JSON.stringify(error));

  }
  );
   
}


/*   $scope.login = function(){ window.alert("login");
    var result=""//webService.sendReq("POST","",);
    
        var req={
            method: "POST",
            url: 'http://localhost:3000/private/login',
            data:{"username":$scope.username, "password":$scope.password}
          }
          var result=
          $http(req)
         .then(function mySuccess(response) {
             $window.alert(response.data);
            result= response.data;
              
            }, function myError(response) {
                $window.alert(response.statusText);
                result= response.statusText;         
          });

    if(result != undefined){
        $window.sessionStorage.setItem("token",result);
        $window.sessionStorage.setItem("username",$scope.username);

        return true;
    }
    else{
        return false;    
    }

};*/
});