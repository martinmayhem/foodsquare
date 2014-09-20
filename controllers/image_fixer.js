var imgApp = angular.module("imgapp", []);

imgApp.controller("ImgController", function(){
  var app = this;
  app.message = "Test2";
})


imgApp.directive("getSize", function(){
    return function(scope, element){
        console.log("test");
        console.log(scope.app.message);
        element.width(100px);
        element.height(100px);
    }
})