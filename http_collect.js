/**
 * Created by lololol on 5/23/15.
 */
var http = require('http')
    , bl = require('bl');


http.get(process.argv[2], function(response){
    response.pipe(bl(function(err, data){
        if (err) return console.error(err);
        data = data.toString();
        console.log(data.length);
        console.log(data);
    }));
});