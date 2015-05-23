/**
 * Created by lololol on 5/23/15.
 */
var http = require('http');

http.get(process.argv[2], function(response){
    response.setEncoding('utf8');
    response.on('data', function(e){
        console.log(e);
    });

});