app.factory('Items', ['$http', function($http){
    return {
        get: function(callback){
            $http.get('https://dl.dropboxusercontent.com/u/67016883/images.json').success(function(data){
                callback(data);
            })
        }
    }
}]);