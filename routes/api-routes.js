// instantiate a new Clarifai app passing in your api key.
var clarapp = new Clarifai.App({
    apiKey: 'f7339c458fca4a9d80086a4db389d9a2'
});
const punkapi = require('punkapi-lib');

module.exports = function(app) {


// // add inputs with concepts
// clarapp.inputs.create([{
//   "url": "https://images.crateandbarrel.com/is/image/Crate/Cuis10cpThrmlCfeMkrWHotWtrROF16",
//   "concepts": [
//     { "id": "coffee maker", "value": true },
//     { "id": "blender", "value": false }
//   ]
// }, {
//   "url": "https://images.crateandbarrel.com/is/image/Crate/CuisGrindNBrew12CupThermalSHF16/$web_product_hero$&/160817124659/cuisinart-grind-and-brew-thermal-12-cup-coffee-maker.jpg",
//   "concepts": [
//     { "id": "coffee maker", "value": true },
//     { "id": "blender", "value": false }
//   ]
// }, {
//   "url": "http://blendersreview.com/wp-content/uploads/2016/02/kitchenaid-5-speed-pic-amazon.jpg",
//   "concepts": [
//     { "id": "blender", "value": true },
//     { "id": "coffee maker", "value": false }
//   ]
// }, {
//   "url": "http://vanidades.taconeras.net/files/2012/11/Licuadora-negra.jpg",
//   "concepts": [
//     { "id": "blender", "value": true },
//     { "id": "coffee maker", "value": false }
//   ]
// }]).then(
//   createModel,
//   errorHandler
// );

// // once inputs are created, create model by giving name and list of concepts
// function createModel(inputs) {
//   clarapp.models.create('kitchen gadgets', ["coffee maker", "blender"]).then(
//     trainModel,
//     errorHandler
//   );
// }

// // after model is created, you can now train the model
// function trainModel(model) {
//   model.train().then(
//     predictModel,
//     errorHandler
//   );
// }

// // after training the model, you can now use it to predict on other inputs
// function predictModel(model) {
//   model.predict(['https://images.crateandbarrel.com/is/image/Crate/Cuis10cpThrmlCfeMkrWHotWtrROF16', 'http://blendersreview.com/wp-content/uploads/2016/02/kitchenaid-5-speed-pic-amazon.jpg']).then(
//     function(response) {
//       console.log(response.outputs[0].data);
//     }, errorHandler
//   );
// }

// function errorHandler(err) {
//   console.error(err);
// }






      
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
	food: "cheeseburger fries"
}

console.log( punkapi.beers(options));

};

