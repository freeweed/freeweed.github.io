angular.module('noobdev.controllers', [])

.controller('WorkCtrl', function($scope, $location, $anchorScroll, $rootScope) {
  $rootScope.page = 'work';
  $location.hash('work');
  $anchorScroll();
})

.controller('ServiceCtrl', function($scope, $location, $anchorScroll, $rootScope) {
  $rootScope.page = 'service';
  $location.hash('service');
  $anchorScroll();
})

.controller('AboutCtrl', function($scope, $location, $anchorScroll, $rootScope) {
  $rootScope.page = 'about';
  $location.hash('about');
  $anchorScroll();
})


.controller('ContactCtrl', function($scope, $location, $anchorScroll, $rootScope) {
  $rootScope.page = 'contact';
  $scope.customer = {};
  $location.hash('contact');
  $anchorScroll();
  $scope.submit = function(){
    window.open('mailto:freeweed.m@gmail.com?subject=contact from customer&body='+$scope.customer.name+' '+$scope.customer.email+' '+$scope.customer.detail);
  }
})
