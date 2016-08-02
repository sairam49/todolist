angular.module('check',["ngResource","angular.filter"])
.controller('MainCtrl',['$scope','$resource',function($scope,$resource){

  Check = $resource("/checks/:id", {id: "@id"},{update:{method:"PUT"}});
  $scope.checks= Check.query();

  $scope.addCheck = function(){
    check = Check.save($scope.newCheck);
    $scope.checks.push(check);
  $scope.newCheck = {};
  }

  $scope.deleteCheck = function(index){
    check = $scope.checks[index]
    Check.delete(check);
   $scope.checks.splice(index,1);
  }

}
]);

