var test = require('tape');
var fill = require('../index');

test('calculations', function(t){

    t.plan(4);

    t.deepEqual( fill(200,200,400,400), {scale:2, width:400, height:400} );

    t.deepEqual( fill(400,200,200,200), {scale:1, width:400, height:200} );

    t.deepEqual( fill(500,200,1000,1000), {scale:5, width:2500, height:1000} );

    t.deepEqual( fill(500,200,1200,800), {scale:4, width:2000, height:800} );

});