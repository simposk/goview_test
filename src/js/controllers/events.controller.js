angular.module('gvApp').controller('eventsController', eventsController);

eventsController.$inject = [
    '$scope',
    '$timeout',
    '$http',
    '$location'
];

function eventsController($scope, $timeout, $http, $location){

    console.log("events controller loaded.");

    var vm = this;
    
    
    //GET events JSON file
    $http.get('storage/events.json')
        //If success http request return events array
        .then(function(response) {

            vm.events = response.data;

        },
        //invalid htpp request return error text
        function(response){

            $scope.events = response.statusText;

        })

        .then(function(){
            vm.upcomming = [];
            vm.past = [];
            for(var i = 0; i < vm.events.length; i++){
                if(vm.events[i].status == "comming"){
                    //Comming events array
                    vm.upcomming.push(vm.events[i]);
                }
                else{
                    //past events array
                    vm.past.push(vm.events[i]);
                }
            }
        });
    // console.log(hc.events);
}
