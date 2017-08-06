angular.module("gvApp",
    [
        'ngRoute',
        'pascalprecht.translate'
    ]);
angular.module("gvApp").config([
    "$routeProvider",
    "$locationProvider",
    "$translateProvider",
    function ($routeProvider, $locationProvider, $translateProvider) {
        
        
        $routeProvider
            .when('/', {
                templateUrl: '/layouts/home.html',
                controller: 'homeController',
                controllerAs: 'home'
                
            })
            .when('/events', {
                templateUrl: '/layouts/events.html',
                controller: 'eventsController',
                controllerAs: 'events'
            })
            .when('/events/:eventId', {
                templateUrl: '/layouts/individual.html',
                controller: 'individualController',
                controllerAs: 'individual'
            })
			
			.when('/events/:eventId/virtual-tour', {
                templateUrl: '/layouts/virtual-tour.html',
				controller: "vrController",
				controllerAs: "vr"
            })
			
			.when('/news', {
                templateUrl: '/layouts/news.html'
            })
			
			.when('/about', {
                templateUrl: '/layouts/about.html'
            })
			
			.when('/volunteer', {
                templateUrl: '/layouts/volunteer.html'
            })
			
            .otherwise({
            redirectTo: '/'});
			
            $locationProvider.html5Mode({
            enabled: true,
            requireBase: true
        });
        
    }
]);