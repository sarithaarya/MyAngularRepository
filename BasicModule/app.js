 //(function functionName() {
//   //'use strict';
//
// angular.module('myFirstApp', [])
// .controller("MyFirstController", function($scope){
//
//   $scope.searchText = "";
//     $scope.check = function () {
//       console.log("You typed '" + this.searchText + "'"); // used 'this' instead of $scope
//     }
// });
//})();

(function functionName() {
  'use strict';
/*NameCalculator*/


//   angular.module('NameCalculator',[])
//
//   .controller('NameCalculatorController', function($scope){
//
// $scope.name="";
// $scope.totalvalue =0;
// $scope.displayNumeric = function(){
//
//   var totalNameValue =calculateNumericForString($scope.name);
//   $scope.totalvalue=totalNameValue;
// }
//
// function calculateNumericForString(string)
// {
//   var totalStringValue = 0;
//   for(var i=0; i<string.length; i++)
//   {
//     totalStringValue += string.charCodeAt(i);
//   }
//
//   return totalStringValue;
// }
//   });

angular.module('DIapp',[])
.controller('DIController',DIController);

function DIController($scope, $filter)
{
  $scope.name="Saritha";

  $scope.upper=function(){
var upCase = $filter('uppercase');
$scope.name=upCase($scope.name);
  };

}

  })();
