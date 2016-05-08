app.directive('gallery', function () {

    // @ local scope property is a string (a pipeline through the scope wall)
    // looking for $scope.customer.name
    return {
        templateUrl: 'templates/list.html'
    };

});
