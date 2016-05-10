app.controller('AppController', ['$scope', 'Items', function ($scope, Items) {


    Items.get(function(response){
        $scope.items = response;
    });

    $scope.getItems = function () {
        return $scope.items;
    }
    
    

}])