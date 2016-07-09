	
	var app = angular.module('app',['ngRoute','bootstrapLightbox']);
	app.config(function($routeProvider){

		$routeProvider.when('/',{
			templateUrl:'home.html',
			controller:'aboutCtrl'
		}).when('/about',{
			templateUrl:'about.html',
			controller:'aboutCtrl'
		}).when('/portfolio',{
			templateUrl:'portfolio.html',
			controller:'portfolioCtrl'
		}).when('/my',{
			templateUrl:'home.html',
			controller:'aboutCtrl'
		}).when('/contact',{
			templateUrl:'contact.html',
			controller:'contactCtrl'
		}).when('/:album_name',{
			templateUrl:'album.html',
			controller:'albumCtrl'
		}).otherwise({redirectTo:'/'});

	});

	app.controller('aboutCtrl',function($scope){
	});

	app.controller('portfolioCtrl',function($scope, $http){
		$http.get('data.json').success(function(data){
			$scope.data = data;
		}).error(function(err){
		});
	});

	app.controller('albumCtrl', function($scope,$http, $routeParams, Lightbox){
		$http.get('data.json').success(function(data){
			$scope.data = data;
		}).error(function(err){
			alert(err);
		});
		$scope.album_name = $routeParams.album_name;

$scope.massive = [];
$scope.mas =[];
$scope.openLightboxModal = function (index) {
	$scope.alb = $scope.albums.photos;
	$scope.photographs;
	angular.forEach($scope.alb, function(photos){
		$scope.pht = photos;
		$scope.pht.url = 'photos/'+$scope.album_name+'/'+ $scope.pht.src;
		$scope.mas.push($scope.pht);
	});

Lightbox.openModal($scope.mas, index);
setTimeout(function(){
$scope.elem = document.querySelector('.modal-content');
$scope.mainEleme = angular.element($scope.elem);
$scope.mainEleme.removeClass('modal-content');	
		});
	};
});

app.controller('contactCtrl', function($scope,$http){
$scope.formError = '';
$scope.validateForm = function(form){
	if(!form){
		$scope.formError ="Пожалуйста введите ваше имя и сообщение";
	}
	else if(!form.nameof || form.nameof == "null" || form.nameof =="false"){
		$scope.formError ="Пожалуйста введите ваше имя";
		console.log('a');
	}
	else if(!form.textof ||form.textof == "null" || form.textof =="false"){
		$scope.formError ="Пожалуйста введите ваше сообщение";
		console.log('s');
	}else{
		$http({
          method  : 'POST',
          url     : 'mail.php',
          data    : $.param($scope.form), //forms user object
          headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
         })
          .success(function(data) {
          	$scope.form = {};
            }
          ).error(function(){
          	$scope.form = {};
          })
	};
};
});
	
	