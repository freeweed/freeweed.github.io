angular.module('noobdev.directive', [])

.directive("scroll", function ($window, $location, $anchorScroll, $state) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
             if (this.pageYOffset >= 100) {
                 scope.boolChangeClass = true;
                 //alert('Scrolled below header.');
             } else {
                 scope.boolChangeClass = false;
                 //$state.go('');
                 //$location.hash('');
                 //$anchorScroll();
             }
            scope.$apply();
        });
    };
});
