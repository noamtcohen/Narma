# Narma
[Narma](http://en.wikipedia.org/wiki/Narma) allows you to unit test NodeJS and all it's node_modules with Karma and Jasime (or what have you)

Node runs natively in [NW.JS](http://nwjs.io/) and I kinda like Karma (and Jasime).
So I thought to run a script launcher and unit test my node server (on the server).

It only runs on Mac for now.

To install:

      npm install
      npm install -g nodewebkit
      
To run, you **must change** the path to the script launcher in **karam.conf.js**
and then run:

      karma start

Maybe it would be a good idea to install the cli, just to make life easy:

      npm install -g karma-cli
