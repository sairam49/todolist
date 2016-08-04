angular.module('check',["ngResource","angular.filter"])
.controller('MainCtrl',['$scope','$resource',function($scope,$resource){
  $scope.foo = false;
  var Check = $resource("/checks/:id", {id: "@id"},{update:{method:"PUT",responseType: 'json'}});
  $scope.checks= Check.query();

  $scope.addCheck = function(){
    check = Check.save($scope.newCheck);
    $scope.checks.push(check);
  $scope.newCheck = {};
  }

  $scope.deleteCheck = function(index){
    check = $scope.checks[index];
    Check.delete(check);
   $scope.checks.splice(index,1);
  }

  var getCheck = function(checkId) {
    var check = $scope.checks.filter(function(check) {
      return check.id == checkId;
    });

    return check[0] || {};
  };

  $scope.updateCheck = function(check_id){

  check = getCheck(check_id);
  check.done = !check.done;
  Check.update({id: check_id},check);
  return check.done;
  }

}
]);

