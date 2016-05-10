app.controller('ImageDetailsController', ['$scope', '$route', 'Items', function ($scope, $route, Items) {


    Items.get(function(response){
        $scope.items = response;
    });

    $scope.getImageUrl = function(){
        var image_id = $route.current.params.images_id;
        var url = $scope.items ? $scope.items[image_id].url : "";
        return url;
    }

}])