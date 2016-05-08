app.controller('ItemController', ['$scope','Items', 'ModalService', function($scope, Items, ModalService){

    var xyzs = null;

    Items.get(function(response){
        xyzs = response;
        $scope.items = response;
    });

    $scope.itemClicked = function (item){
        ModalService.showModal({
            templateUrl: 'templates/modal.html',
            controller: ['$scope', function ($scope) {

                $scope.item = item;

                $scope.close = function (result) {
                    $scope.close(result, 500); // close, but give 500ms for bootstrap to animate
                };

                $scope.rightClick = function () {
                    var i = Math.floor(Math.random() * 100)
                    $scope.item = xyzs[i];

                }

                $scope.leftClick = function () {
                    var i = Math.floor(Math.random() * 100)
                    $scope.item = xyzs[i];
                }

            }]
        }).then(function(modal) {
            modal.element.modal();
            modal.close.then(function(result) {
                $scope.message = "You said " + result;
            });
        });
    }

}]);