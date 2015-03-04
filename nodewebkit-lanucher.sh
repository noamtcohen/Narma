#!/bin/sh


echo '{
  "name": "Narma",
  "main": "'$1'",
  "node-remote":"<local>",
  "window": {
    "title": "Narma",
    "toolbar": true,
    "frame": true,
    "width": 400,
    "height": 300,
    "position": "center"
  },
  "webkit": {
    "plugin": true
  }
}' > test/package.json

nodewebkit test/