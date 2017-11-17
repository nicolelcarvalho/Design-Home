// instantiate a new Clarifai app passing in your api key.
var clarapp = new Clarifai.App({
    apiKey: 'f7339c458fca4a9d80086a4db389d9a2'
});
const punkapi = require('punkapi-lib');
const express = require('express');
const aws = require('aws-sdk');

module.exports = function(app) {


const Upload = require('./upload/upload.server.controller')
const multipart = require('connect-multiparty')
const multipartMiddleware = multipart()
module.exports = (app) => {
// API Server Endpoints
    app.get('/', Upload.displayForm)
    app.post('/upload', multipartMiddleware, Upload.upload)
}



// /*
// config.region = 'us-east-1';

// aws.config.update({
//     accessKeyId: "AKIAI6SCOHX6OMNAYUYA",
//     secretAccessKey: "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",
//     "region": "us-east-1"   
// });



      
// predict the contents of an image by passing in a url
// clarapp.models.predict(Clarifai.GENERAL_MODEL, 'http://www.californiahomedesign.com/sites/all/files/wysiwyg/HSTAR607_Karl-After-Bedroom-Wide-Shot_s4x3_lg.jpg').then(
//     function(response) {
//         console.log(response.outputs[0].data);
//     },
//     function(err) {
//         console.error(err);
//     }
// );



// clarapp.models.predict("eeed0b6733a644cea07cf4c60f87ebb7", "http://www.californiahomedesign.com/sites/all/files/wysiwyg/HSTAR607_Karl-After-Bedroom-Wide-Shot_s4x3_lg.jpg").then(
//     function(response) {
//       for (var i = 0; i < response.outputs[0].data.colors.length; i++) {
//       	console.log(response.outputs[0].data.colors[i]);
//       }
//     },
//     function(err) {
//       // there was an error
//     }
//   );

var options = {
	food: "cheeseburger"
}

console.log( punkapi.beers(options));

};

