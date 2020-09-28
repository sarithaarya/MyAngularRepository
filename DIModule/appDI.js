(function(){
'use strict';

angular.module("myDIApp",[])
.controller('myDIController',DIController);

function DIController($scope, $filter, $injector){
  $scope.name="Saritha";

$scope.upper = function () {
   //alert('blah!');
   var upcase= $filter('uppercase');
  $scope.name = upcase($scope.name);
};
console.log($injector.annotate(DIController));
}


function AnnotateMe(name,time,test)
{
  return "Blah!!";
}
// console.log(DIController.toString());

})();
