/**
 * Created by lololol on 5/23/15.
 */
fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);

console.log(buf.toString().split('\n').length - 1);