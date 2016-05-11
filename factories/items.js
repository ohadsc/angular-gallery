app.factory('Items', ['$http', '$timeout', function($http, $timeout){
    return {
        get: function(callback){
            $timeout(function() {
                $http.get('https://dl.dropboxusercontent.com/u/67016883/images.json').success(function(data){
                    callback(data);
                });
            });
        }
    }
}]);