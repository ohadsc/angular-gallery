app.directive('onError', ['$http', function($http) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            attrs.$observe('ngSrc', function(ngSrc) {
                $http.get(ngSrc).success(function(){
                }).error(function(){
                    element.attr('src', 'http://rhodium.co.il/wp-content/uploads/2013/05/logo_yotpo.png');
                });
            });
        }
    };
}]);