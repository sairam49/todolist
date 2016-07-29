angular.module('todo',['angular.filter'])
.controller('MainCtrl',['$scope', function($scope){

$scope.todos = [];
$scope.title = '';
$scope.time = '';
$scope.date = '';
$scope.done = false;

function addTODO(){
var object = {title: $scope.title,time: $scope.time,date: $scope.date};
$scope.todos.push(object);
$scope.title = '';
$scope.time = '';
$scope.date = '';
}

$scope.addTODO =addTODO;
}]);
