/**
 * Created by noam on 3/4/15.
 */
var gui = require('nw.gui');
win = gui.Window.get();
var nativeMenuBar = new gui.Menu({ type: "menubar" });

function writeAndReadThefile(file,data,done){
    var fs = require('fs');
    fs.writeFile(file,data,function(err){
        fs.readFile(file,function(err,data){
            done(err,data);
        });
    });
}

function getFolderNameOfWorkingDirecory(){
    var cwd = getCWD();
    return cwd.substring(cwd.lastIndexOf('/')+1,cwd.length);
}

function getCWD(){
    return process.cwd();
}
