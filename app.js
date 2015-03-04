/**
 * Created by noam on 3/4/15.
 */
var gui = require('nw.gui');
win = gui.Window.get();
var nativeMenuBar = new gui.Menu({ type: "menubar" });

try {
    nativeMenuBar.createMacBuiltin("Narma");
    win.menu = nativeMenuBar;
} catch (ex) {
    console.log(ex.message);
}
