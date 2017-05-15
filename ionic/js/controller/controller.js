;(function(){
	var controllers = angular.module('controllers',[]);
	
	controllers.controller('indexCtrl',function($scope,$http,$ionicSideMenuDelegate,$window){
		$scope.toggleLeft = function() {
		    $ionicSideMenuDelegate.toggleLeft();
		    console.log($window)
		    
		}
		// $scope.val = 'sjhis'
	})

	controllers.controller('meinvCtrl',function($scope,$http,$ionicSideMenuDelegate){
		$scope.page=1;
		$scope.items = [];
		$scope.loadMore = function(){
			$http({
				url: "http://localhost/myangular/ionic/php/getcontent.php",
				method: "GET",
				params: {
					page:$scope.page++
				}
			}).then(function(data) {
				console.log($scope.page)
				console.log(data.data.showapi_res_body.newslist)
				$scope.items = $scope.items.concat(data.data.showapi_res_body.newslist);
				 $scope.$broadcast('scroll.infiniteScrollComplete');
			})
		}
		$scope.source = function($window){
			$window.location.href="http://m.123456xia.com:888/new/om/2017-04/19/=10e59a.mp4"
		}
		
	})
	controllers.controller('youdaoCtrl',function($scope,$http,$ionicSideMenuDelegate){
		$scope.val={text:""};
		$scope.translating = function(){

			// console.log(val)
			console.log($scope.val.text)
			$http({
				url: "http://localhost/myangular/ionic/php/getyoudao.php",
				method: "GET",
				params: {
					"values":$scope.val.text
				}
			}).then(function(data) {
				console.log(data)
				$scope.res = data.data.showapi_res_body;
				//$scope.val = '';
			})
		}

	})
})();