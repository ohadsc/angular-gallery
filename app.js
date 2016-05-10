// note - to get angular to work in jsfiddle, set load type to no wrap in body.
// create the app
var app = angular.module('galleryModule', ['angularUtils.directives.dirPagination', 'angularModalService', 'ngRoute']);


app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "/templates/app.html"
            })
            .when("/image/:images_id", {
                templateUrl: "/templates/image_details.html",
                controller : 'ImageDetailsController'
            }).otherwise({
                redirectTo:  "/"
        });
    }]
);