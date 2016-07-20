var app = angular.module('myApp', ['ngRoute','ngAnimate', 'ui.bootstrap']);

app.config(function ($routeProvider) {
    $routeProvider

    .when('/', {
        templateUrl: 'pages/about.html',
        controller: 'aboutController'
    })

    .when('/contact', {
        templateUrl: 'pages/contact.html',
        controller: 'BlogController'
    })

    .when('/about', {
        templateUrl: 'pages/about.html',
        controller: 'aboutController'
    })
    .when('/soloprojects', {
        templateUrl: 'pages/soloprojects.html',
        controller: 'AboutController'
    })
    .when('/teamprojects', {
        templateUrl: 'pages/teamprojects.html',
        controller: 'AboutController'
    })
    .otherwise({ redirectTo: '/' });
});

app.controller('HomeController', function ($scope) {
    $scope.message = 'Hello from HomeController';
});

app.controller('BlogController', function ($scope) {
    $scope.message = 'Hello from BlogController';
});

app.controller('aboutController', function ($scope) {
    $scope.myInterval = 3000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    $scope.slides = [
  {
      image: 'images/avatarmd.png',
      name: 'AvatarMD'
  },
  {
      image: 'images/fashion.png',
      name: 'Fashion Passion'
  },
  {
      image: 'images/giantclips.png',
      name: 'Giant Clips'
  },
  {
      image: 'images/motormania.png',
      name: 'Motor Mania'
  },
    {
        image: 'images/NeoTempest.png',
        name: 'Neo Tempest'
    },
    {
        image: 'images/neverwither.png',
        name: 'Never Wither'
    },
    {
        image: 'images/nivrana.png',
        name: 'niVRana'
    },
    {
        image: 'images/two.jpg',
        name: 'T.W.O'
    }

    ];
    console.log("In about controller", $scope.slides);
});
