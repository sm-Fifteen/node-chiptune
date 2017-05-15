OpenMTP_Module = require('../index.js');

const fs = require('fs');

fs.readFile('alf2_zalza_edit.xm', function(err, data) {
    if(err != null) {
        console.log(err);
    } else {
        var module = new OpenMTP_Module(data);
        
        console.log("METADATA")
        Object.keys(module.metadata).forEach(function(key){
			console.log("\t" + key + ":" + JSON.stringify(module.metadata[key]));
		})
        console.log("CONFIG CTLS")
		Object.keys(module.ctls).forEach(function(key){
			console.log("\t" + key + ":" + JSON.stringify(module.ctls[key]));
		})
    }
});
