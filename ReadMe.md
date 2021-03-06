# Compactd 

[![npm version](https://badge.fury.io/js/compactd.svg)](https://badge.fury.io/js/compactd) [![](https://tokei.rs/b1/github/compactd/compactd)](https://github.com/compactd/compactd).

(pronounce compact-D)




Compactd aims to be a self-hosted remote music player in your browser,
streaming from you own personal server. It will also allows to download new
music onto your server just like headphones does.

[![https://i.imgur.com/CeDJZim.jpg](https://i.imgur.com/CeDJZiml.jpg)](https://i.imgur.com/CeDJZim.jpg)

## Features

 - Scan any download folder (no neeed for a specific format like Plex)
 - Finder-like columns for browsing library
 - Fuzzy finder for searching library
 - Library reorganization (moving an album to a different artist)
 - Hidding and removing track (only from the database) from library
 - Streaming music 
 - Music transcoding on-the-fly
 - Hotkey controls (J, K, L, Ctrl+P)
 - Artist and album downloading
 - Gazelle-based trackers support
 - Deluge torrent client supported

## Stack

Redux, React, PouchDB, Webpack, Typescript, Socket.io...

## Prequisites

 - Node v8 and npm v5. I recommend using https://github.com/creationix/nvm
 - CouchDB v2. You can install it following [this guide](https://github.com/apache/couchdb/blob/master/INSTALL.Unix.md) for linux . Windows is quite straightforward, on Debian, you will need to build it from source following the tutorial. Just make sure you don't configure anything or any password.
 - Latest Ffmpeg. Installation varies from OS, you might wanna follow [this guide](https://github.com/adaptlearning/adapt_authoring/wiki/Installing-FFmpeg)
 - deluge with deluge-web are optionnal (for downloading new content)
 
## Installation

```
$ npm install --global compactd
$ compactd --configure
```
Follow the steps. Once it is down everything is configured!
 
## Starting
 
 Just run
 
 ```
 $ compactd --serve
 ```
 
 This will spawn a pm2 process in the background if it's not already running for process management.
 
 ## Stopping, restarting
 
 ```
 $ pm2 restart compactd
 $ pm2 stop compactd
 ```
 
