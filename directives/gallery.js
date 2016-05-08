app.directive('gallery', function () {

    // @ local scope property is a string (a pipeline through the scope wall)
    // looking for $scope.customer.name
    return {
        restrict : 'E',
        templateUrl: 'templates/list.html',
        controller : ['$scope', 'Items', 'ModalService', function($scope, Items, ModalService){

            Items.get(function(response){
                $scope.items = response;
            });

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

            $scope.itemClicked = function (item){
                ModalService.showModal({
                    templateUrl: 'templates/modal.html',
                    controller: ['$scope', function ($scope) {

                        $scope.item = item;

                        $scope.close = function (result) {
                            $scope.close(result, 500); // close, but give 500ms for bootstrap to animate
                        };

                        $scope.rightClick = function () {
                            var i = Math.floor(Math.random() * 100);
                            $scope.item = this.$parent.$root.items[i];

                        }

                        $scope.leftClick = function () {
                            var i = Math.floor(Math.random() * 100);
                            $scope.item = this.$parent.$root.items[i];
                        }

                    }]
                }).then(function(modal) {
                    modal.element.modal();
                    modal.close.then(function(result) {
                        $scope.message = "You said " + result;
                    });
                });
            }

        }]
    };

});
