// note - to get angular to work in jsfiddle, set load type to no wrap in body.
// create the app
var app = angular.module('galleryModule', ['angularUtils.directives.dirPagination', 'angularModalService']);

app.controller('ListController', ['$scope', function($scope){
    $scope.orderProp = 'date';
    $scope.reverse = false;

    $scope.sort = function(item) {
        if ($scope.orderProp == 'date') {
            return new Date(item.date);
        }
        return item[$scope.orderProp];
    }

    $scope.tab = function (keyName) {
        $scope.orderProp = keyName;
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    };

    $scope.itemClicked = function (item) {

        debugger;

    }

}]);


app.controller("tabsController", ['$scope', function ($scope) {

    $scope.sortk = 'date'


}]);

app.filter( 'toDate', function() {
        return function( input ) {
            var date = new Date(input)
            return date;
        }
    });