angular.module('gvApp').controller('vrController', vrController);

vrController.$inject = [
    '$routeParams',
    '$scope',
    '$timeout',
    '$http',
    '$location'
];

function vrController($routeParams, $scope, $timeout, $http, $location){
	console.log("VR Controller loaded.");
	
	vm = this;
	
	vm.getData = (function(){
		$http.get('/storage/events.json')
			//If success http request return events array
			.then(function(response) {

				//$scope.events = response.data;
				
				// siuo atveju template butu naudojama kaip {{ individual.message }}
				vm.event = response.data[--$routeParams.eventId];
				
			},
			//invalid htpp request return error text
			function(response){

				vm.event = response.statusText;
				//console.log($scope.events);

			});
	})();
	
	//console.log(individualController().labas);
	
	
}