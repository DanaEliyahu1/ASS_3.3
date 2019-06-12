


//angular.module("myApp");
app.service("webService", function($http){
    this.sendReq=function(method,url,dataWeb){
        var req={
            method: method,
            url: 'http://localhost:3000/'+ url,
            data:dataWeb
              
          }
          var result=
          $http(req)
         .then(function mySuccess(response) {
             window.alert(response.data);
            result= response.data;
              
            }, function myError(response) {
                window.alert(response.statusText);
                result= response.statusText;         
          });
          return result;
    }

});