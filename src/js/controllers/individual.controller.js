angular.module('gvApp').controller('individualController', individualController);

individualController.$inject = [
    '$routeParams',
    '$scope',
    '$timeout',
    '$http',
    '$location'
];

function individualController($routeParams, $scope, $timeout, $http, $location){
	console.log("Individual Controller loaded.");
    // taip galima atskirti, kad controller'is turetu savo atskira scope ir galima butu tiesiogiai i ji kreiptis. gvApp.js faile yra papildomai itraukta controllerAs, kuris nurodo, kaip tai itraukti template.
    var vm = this;
    
    vm.event;

    
    vm.getData = (function(){
		
		$http.get('/storage/events.json')
			//If success http request return events array
			.then(function(response) {

				//$scope.events = response.data;
				
				// siuo atveju template butu naudojama kaip {{ individual.message }}
				vm.event = response.data[--$routeParams.eventId];
				createPhotosList(vm.event);
				
			},
			//invalid htpp request return error text
			function(response){

				vm.event = response.statusText;
				//console.log($scope.events);

			});
		})();
		

        /*.then(function(){
            $scope.commingEvents = [];
            $scope.pastEvents = [];
            for(var i = 0; i < $scope.events.length; i++){
                if($scope.events[i].status == "comming"){
                    //Comming events array
                    $scope.commingEvents.push($scope.events[i]);
                }
                else{
                    //past events array
                    $scope.pastEvents.push($scope.events[i]);
                }
            }
        })*/
    function createPhotosList(response){
        
        $scope.photosNumer = response.photoList;
        $scope.photoSrc = response.photoAddress;
        vm.photosArray = [];
		
        for(var i = 1; i <= $scope.photosNumer; i++){
            
            //$scope.photoInfo = new Object();
            $scope.photoInfo = {
                "name":  response.title,
                "src": "/../dist/img/" + $scope.photoSrc + "_" + i + ".jpg"
            }
            vm.photosArray.push($scope.photoInfo);
        }
		$timeout(function(){
			if($scope.photoSrc == "kalvarijos_motiejaus_valanciaus_gymnasium"){
			elementsArray = [].slice.call($("#individual #gallery ul li"));
			elementsArray.forEach(function(element){
				element.style.maxHeight = "none";
				element.style.minHeight = "none";
			});
			
		}
			
		}, 100);
    }
	
	vm.test = function(){
		console.log("ok");
	}
    
    // siuo atveju template butu naudojama kaip {{ individual.message }}
    //vm.message = "Individual event " + $scope.events[0].status;
    //console.log($scope.events[0].status);
}
