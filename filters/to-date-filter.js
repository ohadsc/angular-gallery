app.filter( 'toDate', function() {
    return function( input ) {
        var date = new Date(input)
        return date;
    }
});