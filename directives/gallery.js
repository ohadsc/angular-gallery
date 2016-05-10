app.directive('gallery', function () {

    // @ local scope property is a string (a pipeline through the scope wall)
    // looking for $scope.customer.name
    return {
        restrict : 'E',
        templateUrl: 'templates/list.html',
        scope : {
            items : "=",
            displaySearch : "="
        },
        link : function (scope, element, attrs) {
            attrs.$observe('search', function (newValue, oldValue) {
                if (newValue !== oldValue){
                    scope.search = newValue;
                }
            })
        },
        controller : ['$scope', 'ModalService', function($scope, ModalService){

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
                    controller: ['$scope', 'items', 'close', function ($scope, items, close) {

                        $scope.item = item;

                        $scope.close = function (result) {
                            close(result, 500); // close, but give 500ms for bootstrap to animate
                        };

                        $scope.rightClick = function () {
                            var i = Math.floor(Math.random() * 100);
                            $scope.item = items[i];

                        }

                        $scope.leftClick = function () {
                            var i = Math.floor(Math.random() * 100);
                            $scope.item = items[i];
                        }

                    }],
                    inputs: {
                        items: $scope.items
                    }
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
