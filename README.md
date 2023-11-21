reascale-js
===========

Reaper .reascale files in JavaScript.

Usage
-----

You can use the convert-cli script to generate JavaScript of your own Reascale files.

```
# Convert a single file
node convert-cli.js < my.reascale > my.js

# Convert multiple files into single omnibus
node convert-cli.js --omnibus=my-omnibus.js *.reascale

# Convert multiple files into respective .jsen
node convert-cli.js --single-files *.reascale

# Convert multiple files into respective .jsen into another directory
node convert-cli.js --single-files --dest-dir foo *.reascale

# Convert multiple files into respective .jsen into another directory and an omnibus in /dev/null
node convert-cli.js --omnibus /dev/null --single-files --dest-dir foo *.reascale
```

Omnibus file
------------

The included omnibus.js script contains all of the scales from the files in `sources/`
in deduplicated form.
 
To regenerate this file, run `npm run rebuild`.
 

Scale file copyrights
---------------------

The source Reascale files are copyright their original authors, acquired from the Reaper Stash.
They are reproduced in this repo for usability reasons.

* [Exotic.reascale](http://stash.reaper.fm/v/7971/ReaScale-Exotic%20Scales%20%26%20Modes.zip) by Aeolian1
* [ZD-Ultimate.reascale](http://stash.reaper.fm/v/8075/ZD-Ultimate.reascale) by zappadave
* [ZD-basic.reascale](http://stash.reaper.fm/v/8065/ZD-basic.reascale) by zappadave
* [ZD-complete with chords laptop ed.js](https://stash.reaper.fm/v/27335/ZD-complete%20%20with%20chords%20laptop%20ed.reascale) by zappadave
* [ZD-complete-plus.reascale](http://stash.reaper.fm/v/8073/ZD-complete-plus.reascale) by zappadave
* [ZD-complete.reascale](http://stash.reaper.fm/v/8070/ZD-complete.reascale) by zappadave
* [ZDScaleWorld.reascale](http://stash.reaper.fm/v/7975/ZDScaleWorld.reascale) by zappadave
* [skylars.reascale](https://stash.reaper.fm/v/46318/skylars.reascale) by mister_happy
* [xasman.reascale](http://stash.reaper.fm/v/7982/xasman.reascale) by Xasman
