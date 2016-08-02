angular.module('todolist',['angular.filter','ngResource'])
.controller('MainCtrl',['$scope','$resource',function($scope,$resource){

  Todolist = $resource("/todos/:id",{id: "@id"},{update:{method:"PUT"}});
  $scope.todos = Todolist.query();

  $scope.addTodo = function(){
     todolist = Todolist.save($scope.newTodo);
     $scope.todos.push(todolist);
     $scope.newTodo = {};
     }

  }
])
