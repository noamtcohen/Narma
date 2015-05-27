echo {                            >  test/package.json
echo  "name": "Narma",            >> test/package.json
echo    "main": "%1%",            >> test/package.json
echo    "node-remote":"<local>",  >> test/package.json
echo    "window": {               >> test/package.json
echo      "title": "Narma",       >> test/package.json
echo      "toolbar": true,        >> test/package.json
echo      "frame": true,          >> test/package.json
echo      "width": 400,           >> test/package.json
echo      "height": 300,          >> test/package.json
echo      "position": "center"    >> test/package.json
echo  },                          >> test/package.json
echo    "webkit": {               >> test/package.json
echo  	"plugin": true            >> test/package.json
echo    }                         >> test/package.json
echo }                            >> test/package.json

nodewebkit test/
