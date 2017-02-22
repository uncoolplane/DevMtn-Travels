angular.module('devmtnTravel', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url:'/',
                templateUrl: "../views/about.html",
                controller: 'aboutCtrl'
            })
            .state('booked', {
                url:'/booked/:id',
                templateUrl: "../views/booked.html",
                controller: 'bookedCtrl'
            })
            .state('contact', {
                url:'/contact',
                templateUrl: "../views/contact.html",
                controller: 'contactCtrl'
            })
            .state('locations', {
                url:'/locations',
                templateUrl: "../views/locations.html",
                controller: 'locationsCtrl'
            })
            .state('packages', {
                url:'/packages',
                templateUrl: "../views/packages.html",
                controller: 'packagesCtrl'
            });

        $urlRouterProvider.otherwise('/');
    });
