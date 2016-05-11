app.controller('AppController', ['Items', function (Items) {

    var vm = this;

    Items.get(function(response){
        vm.items = response;
    });

    vm.getItems = function () {
        return vm.items;
    };

}])