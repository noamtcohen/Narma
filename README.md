# Narma
Narma allows you to unit test NodeJS and all it's node_modules with Karma and Jasime (or what have you)

Node runs natively in [NW.JS](http://nwjs.io/) and I kinda like Karma (and Jasime).
So I thought to write a script launcher and unit test my node code in a nodewebkit browser.

To install:

      npm install
      npm install -g nodewebkit

install the cli globally

      npm install -g karma-cli
      
To run, you **must change** the path to the launcher script in [**karam.conf.js**](https://github.com/noamtcohen/Narma/blob/master/karma.conf.js#L59)

Use [bat launcher](https://github.com/noamtcohen/Narma/blob/master/bat-lanucher.bat) for windows

Use [bash launcher](https://github.com/noamtcohen/Narma/blob/master/bash-lanucher.bat) for all the rest

Make sure you use an absolute path and front slashes on windows too.

and then run:

      karma start




Checkout [test/test.js](https://github.com/noamtcohen/Narma/blob/master/test/test.js) and [app/weserver.js](https://github.com/noamtcohen/Narma/blob/master/app/webserver.js) to see exapmles of what you can do.

You can start a web server, read from the file system and use jQuery, inside a Jasime suite
```javascript
describe('somthing to test',function(){
   it('should be ok',function(done){
      var http = require('http');
      var server = http.createServer(function(req,res){
      });
 
      var fs = require('fs');
      fs.writeFile(file,data,function(err,data){
      });

      $.get(url,function(data){
      });
      
      done();
   });
});
```

***It only runs on Mac for now.***
