var fs = require('fs')
let feature_reader = require('geojson-feature-reader')
let read_stream = fs.createReadStream('Addressgeocoder.geojson')
 
feature_reader(read_stream, feature_callback)
    .then(count => console.log(`${count} features processed`))
    .catch(e => console.error(`Unable to read data`))
    
function feature_callback(feature){
    typeof feature === 'json' //true
    
    console.log("GeoJson");
    console.log(feature); 
    // { "type": "Feature", "properties": { ... }, "geometry": { ... }
    // or
    // { "type": "feature", "properties": { ... }, "geometry": { ...} }
}
 