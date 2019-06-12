


//angular.module("myApp");
/*
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
*/
angular.module("myApp").service("webService",function($http){
this.login=function(username,password){
    var req={
        method: 'POST',
        url: 'http://localhost:3000/private/login',
        data: {
            username :username, password :password}
    };
   /* return $http({
        method: 'POST',
        url: 'http://localhost:3000/private/login',
        data:{
            "username":username, "password":password}
    });*/

    return $http.post('http://localhost:3000/private/login',{
        
"username":username, "password":password
    }
);
}
this.getCategories=function(){
    
    var req={
      method: 'GET',
      url: 'http://localhost:3000/view/getCategories'
  
    }
    return $http(req)
   

}
this.getQuestions=function(){
    
    var req={
      method: 'GET',
      url: 'http://localhost:3000/view/getQuestions'
  
    }
    return $http(req)
   

}


})