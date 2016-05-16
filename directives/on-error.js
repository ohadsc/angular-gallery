app.directive('onError', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('error', function() {
                element.attr('src', 'http://www.leapgo.com/wp-content/uploads/2014/05/yotpo-logo.png');
            });
        }
    };
});