




// login controller
app.controller("loginController", function($scope, webService, $window) {
    self = this;


    self.login = function () {   //$window.alert(JSON.stringify(username.value));
        var result = webService.login(username.value, password.value).then(function (response) {
            $window.sessionStorage.setItem("token", response.data);
            $window.sessionStorage.setItem("username", username.value);
            //self.getMyFavoriteAttractions();
            webService.getFavoriteAttractions()
            .then(function mySuccess(response) {
                $window.sessionStorage.setItem("favorites", JSON.stringify(response.data));

            }, function myError(response) {
                self.favorites = response.data;

            });
            $window.alert("you have logged in successfully");





        }, function (error) {
            $window.alert(JSON.stringify(error));

        }
        );
        self.currUser = function () {
            return webService.currUser();
        }

        $scope.currUser = "guest";

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