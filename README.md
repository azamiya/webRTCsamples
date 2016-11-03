![Imgur](http://i.imgur.com/aJfFBV7.png)
# webrtc-samples #

### What is this repository for? 
make telepresence teddybear using PSVR, threejs, johnny-five, arduino, iRobot create2, peerJS

### How do I get set up? ###

```sh
$ git clone path
$ cd path
$ npm install
$ npm start
```

![Imgur](http://i.imgur.com/aJfFBV7.png)
### Before using skyway ###
DO NOT FORGET to setup your domain to skyway API key settings.  
Witout this setting, your domain (also localhost) can not use skyway.  
![Imgur](http://i.imgur.com/lWM3PYh.png)  

![Imgur](http://i.imgur.com/aJfFBV7.png)
### Index ###
**01-1.peer video chat** 
simple peer video chat sample code

**02-1.skyway video chat** 
simple skyway videochat sample code  
※WARNING please use https://skyway.io/dist/v2/0.3/peer.js and DO NOT FORGET these options    
```
var peer = new Peer({
    key: 'bc3035be-047d-4b36-bab7-bd2a8b0c7b33',
    debug: 3,
    turn: false
});
```

![Imgur](http://i.imgur.com/aJfFBV7.png)  

### References ###
[Skyway tutorial](https://html5experts.jp/katsura/16331/)  
[Skyway TURN problem google group](https://groups.google.com/forum/#!topic/skywayjs/lgn11RpR-7g)