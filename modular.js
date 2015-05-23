/**
 * Created by lololol on 5/23/15.
 */
var filter = require('./filter');

filter(process.argv[2], process.argv[3], function(err, list){
    if (err) return console.error('err: ', err);

    list.forEach(function(dirname){
        console.log(dirname);
    });
});