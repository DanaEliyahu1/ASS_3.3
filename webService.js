


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
angular.module("myApp").service("webService",function($http,$window){
this.login=function(username,password){
    var req={
        method: 'POST',
        url: 'http://localhost:3000/private/login',
        data:JSON.stringify({
         "username" :username,
         "password" :password}),
        headers :{'Content-Type':'application/json'  } 
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

this.showAttraction=function(attractionName){

    $window.location="#!showAttraction";
    $window.sessionStorage.setItem("attraction",attractionName) ;
    //$window.alert(attractionName);

}
this.getAttractionsByCategory=function(categoryName){
    var req={
        method: 'GET',
        url: 'http://localhost:3000/view/getAttractionsByCategory/'+categoryName
        
      }
     
      return $http(req)

}

this.currUser=function(){
    return $window.sessionStorage.getItem(username);
    
}

this.register=function(username,password,firstName,lastName,email,birthDate,city,country,qid1,qid2,ans1,ans2,categories){
    var req={
        method: 'POST',
        url: 'http://localhost:3000/private/register',
        data:JSON.stringify({
         "username" :username,
         "password" :password,
         "firstName": firstName,
         "lastName": lastName,
         "email": email,
         "birthDate": birthDate,
         "city": city,
         "country": country,
         "question1": qid1,
         "question2": qid2,
         "answer1":ans1,
         "answer2": ans2,
         "interests":categories
     }
         ),
        headers :{'Content-Type':'application/json'  } 
    };
    return $http(req);

}
})
