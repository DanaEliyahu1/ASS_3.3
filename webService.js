


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
        data:{"username" :username, "password" :password},
        headers :{'Content-Type':'application/x-www-form-urlencoded'} 
    };
    return $http(req);

    /*return $http.post('http://localhost:3000/private/register',{
        
"username":username, "password":password
    }
);*/
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
this.search=function(search){
    
    var req={
      method: 'GET',
      url: 'http://localhost:3000/view/getAttractionsByName/'+search
  
    }
    return $http(req)
   

}


})