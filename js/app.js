angular.module('noobdev', ['ui.router', 'noobdev.controllers', 'noobdev.directive'])
.run(function($rootScope, $location, $anchorScroll, $state) {
    $rootScope.page = null;
    $rootScope.goPage = function(){
      if($rootScope.page == null){
        $state.go('work')
      }else{
        $location.hash($rootScope.page);
        $anchorScroll();
      }
    }
})
.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
   /*.state('menu', {
     url: '/menu',
     abstract: true,
     templateUrl: 'templates/menu.html'
   })*/
  .state('work', {
    templateUrl: 'templates/work.html',
    controller: 'WorkCtrl'
  })
  .state('service', {
    templateUrl: 'templates/service.html',
    controller: 'ServiceCtrl'
  })
  .state('about', {
    templateUrl: 'templates/about.html',
    controller: 'AboutCtrl'
  })
  .state('contact', {
    templateUrl: 'templates/contact.html',
    controller: 'ContactCtrl'
  })
  /*.state('contact', {
    url: '/contact',
    templateUrl: 'templates/contact.html'
  })*/

  // if none of the above states are matched, use this as the fallback
  //$urlRouterProvider.otherwise('/menu');

});
