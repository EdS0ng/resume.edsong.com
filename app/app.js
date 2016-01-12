'use strict';

angular.module('proficiencies', ['ui.router'])

.controller('aboutCtrl', function ($scope, $state){
  $scope.front = function (){
    $state.go('front');
  }

  $scope.back = function (){
    $state.go('back');
  }

  $scope.database = function (){
    $state.go('database');
  }

  $scope.mobile = function (){
    $state.go('mobile');
  }
  $scope.other = function (){
    $state.go('other');
  }
})

