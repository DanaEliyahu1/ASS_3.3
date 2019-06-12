




// login controller
angular.module("myApp")
.controller("loginController", function ($scope,webService,$window,$http) {
   
    $scope.login = function(){ window.alert("login");
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

    };
});