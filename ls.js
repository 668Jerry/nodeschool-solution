/**
 * Created by lololol on 5/23/15.
 */
fs = require('fs');

var ext = process.argv[3];

fs.readdir(process.argv[2], function(err, list){
    list.forEach(function(dirname){
        console.log(dirname);
        if (dirname.indexOf('.' + ext) > -1)
            console.log(dirname);
    });
});