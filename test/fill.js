var test = require('tape');
var fill = require('../index');

test('calculations', function(t){

    t.plan(3);

    t.deepEqual( fill(200,200,400,400), {scale:2, width:400, height:400} );

    t.deepEqual( fill(400,400,200,200), {scale:0.5, width:200, height:200} );

    t.deepEqual( fill(500,200,1000,1000), {scale:5, width:2500, height:1000} );

});