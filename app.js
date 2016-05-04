// note - to get angular to work in jsfiddle, set load type to no wrap in body.
// create the app
var app = angular.module('galleryModule', []);

app.directive('gallery', function () {

    // @ local scope property is a string (a pipeline through the scope wall)


    // looking for $scope.customer.name
    return {
        templateUrl: 'list.html'
    };

});

app.directive('onError', function($http) {
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
});

app.factory('Items', ['$http', function($http){
    return {
        get: function(callback){
            $http.get('https://dl.dropboxusercontent.com/u/67016883/images.json').success(function(data){
                callback(data);
            })
        }
    }
}]);

// Controllers
app.controller('ItemController', function($scope, Items){

    Items.get(function(response){
        $scope.items = response;
    });

})


app.controller('ListController', function($scope){

    $scope.orderProp='date';

    $scope.sort = function(item) {
        return item[$scope.orderProp];
    }

});