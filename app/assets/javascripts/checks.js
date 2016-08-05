var app = angular.module('check',["ngResource","angular.filter"]);


app.controller('MainCtrl',['$scope','$resource',function($scope,$resource){
  $scope.foo = false;
  var Check = $resource("/checks/:id", {id: "@id"},{update:{method:"PUT",responseType: 'json'}});
  $scope.checks= Check.query();
   $scope.newCheck = {};
   $scope.newCheck.title = '';
   $scope.newCheck.date = moment();
   $scope.newCheck.date = moment();

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
  }

  $scope.updateCheck = function(check_id){

  check = getCheck(check_id);
  check.done = !check.done;
  Check.update({id: check_id},check);
  return check.done;
  }

}
]);



app.directive('date', function () {
    return {
        restrict: 'A',
        link: function (scope, element) {
            $(element).datetimepicker({
              format:  'DD/MM/YYYY'

            });
        }
    }
});


app.directive('time', function () {
    return {
        restrict: 'A',
        link: function (scope, element) {
            $(element).datetimepicker({
              format:  'HH:mm'
            });
        }
    }
});


app.directive('datepicker', function(){
	return {
		require: 'ngModel',
		restrict: 'A',
		link: function(scope, element, attrs, ngModel){

    element.datetimepicker({
			 format:  'DD/MM/YYYY'
			});

       element.on("dp.change", function() {
        scope.newCheck.date = element.val();
       });

		}
	}
});


app.directive('timepicker', function(){
	return {
		require: 'ngModel',
		restrict: 'A',
		link: function(scope, element, attrs, ngModel){

    element.datetimepicker({
      format:  'HH:mm'
			});

       element.on("dp.change", function() {
        scope.newCheck.time = element.val();
       });

		}
	}
});












