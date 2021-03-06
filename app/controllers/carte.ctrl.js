'use strict';

angular.module('carteModule',[]).controller('carteCtrl', 
	['$scope','webReportingService','leafletData',
    function($scope,webReportingService,leafletData) {

    	$scope.titre ="Carte";

        $scope.carteVelibMaPostionSelected = false;
        $scope.carteVelibEuropeSelected = false;

        $scope.selectCarteVelibPosition = function(){
            $scope.carteVelibMaPostionSelected = true;
        };
    	
        $scope.selectCarteVelibEurope = function(){
            $scope.carteVelibEuropeSelected = true;
        };
    	
    }
]);