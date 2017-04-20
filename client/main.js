var app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $qProvider){

  $qProvider.errorOnUnhandledRejections(false);

  $urlRouterProvider.otherwise('/');

  $stateProvider

    .state('index', {
      url: '/',
      templateUrl: '/partials/_homepage.html'
    })

    .state('about', {
      url: '/about',
      templateUrl: '/partials/_about.html'
    })

    .state('location', {
      url: '/location',
      templateUrl: '/partials/_location.html'
    })

    .state('salmiana', {
      url: '/salmiana',
      templateUrl: '/partials/_salmiana.html'
    })

    .state('tobaziche', {
      url: '/tobaziche',
      templateUrl: '/partials/_tobaziche.html'
    })

    .state('arroqueno', {
      url: '/arroqueno',
      templateUrl: '/partials/_arroqueno.html'
    })

    .state('cupreata', {
      url: '/cupreata',
      templateUrl: '/partials/_cupreata.html'
    })

    .state('tobala', {
      url: '/tobala',
      templateUrl: '/partials/_tobala.html'
    })

    .state('cocktails', {
      url:'/cocktails',
      templateUrl: '/partials/_cocktails.html'
    })

    .state('contact', {
      url: '/contact',
      templateUrl: '/partials/_contact.html'
    })
})
