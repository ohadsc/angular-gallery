//var app = angular.module('galleryModule');
app.directive('arrowClicks', function () {
    return {
        restrict : 'E',
        templateUrl :'templates/arrow_clicks.html',
        scope : {
            rightClick : "&",
            leftClick : "&"
        }

    }
});