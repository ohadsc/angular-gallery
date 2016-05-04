// note - to get angular to work in jsfiddle, set load type to no wrap in body.
// create the app
var app = angular.module('galleryModule', ['angularUtils.directives.dirPagination', 'angularModalService']);

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


/*

app.controller('ModalController', function($scope, close) {

    $scope.close = function (result) {
        close(result, 500); // close, but give 500ms for bootstrap to animate
    };
});*/




// Controllers
app.controller('ItemController', ['$scope','Items', 'ModalService', function($scope, Items, ModalService){

    Items.get(function(response){
        $scope.items = response;
    });

    $scope.itemClicked = function (item){
        ModalService.showModal({
            templateUrl: 'modal.html',
            controller: function ($scope) {

                $scope.item = item;

                $scope.close = function (result) {
                    //$scope.close(result, 500); // close, but give 500ms for bootstrap to animate
                };

            }
        }).then(function(modal) {
            modal.element.modal();
            modal.close.then(function(result) {
                $scope.message = "You said " + result;
            });
        });
    }

}]);


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


app.controller("tabsController", function ($scope) {

    $scope.sortk = 'date'


});