angular.module('gvApp').controller('homeController', homeController);

homeController.$inject = [
    '$routeParams',
    '$scope',
    '$timeout',
    '$http',
    '$location',
    '$window'
];

function homeController($routeParams, $scope, $timeout, $http, $location, $window){

    var vm = this;
    
    console.log("Home controller loaded.");
    
    $("#home h1").css({
        "height": $("#home h1").height(),
        "bottom": 0 + "px"
    });
    
    angular.element($window).bind('resize', changeHeight);
    $timeout(changeHeight, 100);
    $timeout(changeHeight, 200);
	$timeout(changeHeight, 300);
    function changeHeight(){
        if($window.innerWidth > 767){
            $("#journey .fixed-height").css("height", $("#journey").height());
            $("#join-us .fixed-height").css("height", $("#join-us img").height());
        }
    }
    
    
}
