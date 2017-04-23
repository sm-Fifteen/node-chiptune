# node-libopenmpt

A JS wrapper for libopenmpt, to enable decoding and playing tracker modules using node.

A fork from Guichaguri's [node-chiptune](https://github.com/Guichaguri/node-chiptune).

If you are looking for a HTML5 player to play tracker music, check out [Chiptune2.js](https://github.com/deskjet/chiptune2.js)

## Example

```javascript
var chiptune = require('node-chiptune');
var speaker = require('speaker');

fs.readFile('file.mod', function(err, data) {
    if(err != null) {
        console.log(err);
    } else {
        // Create a chiptune readable stream
        var chiptuneStream = chiptune(data, {
            channels: 2, // 2 channels (stereo)
            sampleRate: 48000 // 48,000 Hz sample rate
        });
        
        // We should be able to pipe the the chiptune stream to the speaker
        chiptuneStream.pipe(new Speaker());
    }
});

fs.readFile('file.mod', function(err, data) {
    if(err != null) {
        console.log(err);
    } else {
        var module = new OpenMTP_Module(data);
        var chiptuneStream = module.openAsStream();
		
		chiptuneStream.pipe(new Speaker());
    }
});
```

## Supported formats
All sound tracker module formats (meaning not MIDI or ABC) supported by
libOpenMTP should work.
