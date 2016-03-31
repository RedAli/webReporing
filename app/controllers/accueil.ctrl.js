'use strict';

angular.module('accueilModule',[]).controller('accueilCtrl', 
	['$scope', '$filter', 'NgTableParams','$mdSidenav',
    function($scope, $filter, NgTableParams, $mdSidenav) {

    	$scope.etudiants = [
    		{
    			photo: "/assets/img/ali.jpg",
    			nom: "Ali REDJAL"
    		},
    		{
    			photo: "/assets/img/david.jpg",
    			nom: "David ZON"
    		},
    		{
    			photo:"/assets/img/zak.jpg",
    			nom:"Zakarie LEBRIQ"
    		}
    	];


        $scope.slides = [
            {
                image: '/assets/img/angularjs.png',
                id: 0
            },
            {
                image: '/assets/img/highcharts.png',
                id: 1
            },
            {
                 image: '/assets/img/leaflet.png',
                id: 2
            }
        ];
    	
    }
]);