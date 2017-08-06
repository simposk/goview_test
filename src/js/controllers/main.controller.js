angular.module('gvApp').controller('mainController', mainController);

mainController.$inject = [
    '$routeParams',
    '$scope',
    '$location',
    '$translate',
    '$window',
    '$timeout'
];

function mainController($scope, $routeParams, $location, $translate, $window, $timeout){

    var vm = this;
    
    vm.changeLanguage = changeLanguage;
    vm.showBar = showBar;
    
    console.log("Main controller loaded.");
    
    $scope.selectLang = false;
    function changeLanguage() {
        if($scope.selectLang){
            $translate.use('lt');
            $scope.selectLang = !$scope.selectLang;
            $("header button").text("en");
            
        }
        else{
            $translate.use('en');
            $scope.selectLang = !$scope.selectLang;
            $("header button").text("lt");
        }
        
        //console.log(this);
    };
    
    vm.pauseVideoOnModalClose = function() {
        var video = document.getElementById("video-player");
        var url = video.src;

        video.src = "";
        video.src = url;
    }


    
    
    $window.onclick = function(){
        if($('.mobile-nav').hasClass('show')){
            $('.mobile-nav').removeClass('show');
            $("body").css('overflow', 'visible');
        }
    }
    
    function showBar(){
        $timeout(function(){
            $(".mobile-nav").addClass("show");
            $("body").css('overflow', 'hidden');
        }, 1);
    }
}
