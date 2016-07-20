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
    $scope.dataArray = [
      {
          src: 'images/avatarmd.png'
      },
      {
          src: 'images/avatarmd.png'
      },
      {
          src: 'images/avatarmd.png'
      },
      {
          src: 'images/avatarmd.png'
      },
      {
          src: 'images/avatarmd.png'
      },
      {
          src: 'images/avatarmd.png'
      },
      {
          src: 'images/avatarmd.png'
      },
      {
          src: 'images/avatarmd.png'
      }
    ];
    console.log("In about controller", $scope.dataArray);
});
