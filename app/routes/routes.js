'use strict';

angular.module('proficiencies').config(function ($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('front', {
    url: '/',
    templateUrl: 'app/templates/front.html'
  })
  .state('back', {
    url:'/back',
    templateUrl: '/app/templates/back.html'
  })
  .state('mobile', {
    url:'/mobile',
    templateUrl: 'app/templates/mobile.html'
  })
  .state('database', {
    url: '/database', 
    templateUrl: 'app/templates/database.html'
  })
  .state('other', {
    url:'/other',
    templateUrl: 'app/templates/other.html'
  })
})