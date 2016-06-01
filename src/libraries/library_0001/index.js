var lib3d = require('lib3d');

var model = require('./model.json');

var map = require('./map.jpg');
var img = require('./img.jpg');

function register() {
    var library = new lib3d.LibraryData({
        name: 'library_0001',
        model: model,
        images: {
            map: map,
            img: img
        },
        materials: {
            default: {
                map: 'map',
                shininess: 0
            }
        }
    });

    lib3d.registerLibrary(library);
}

module.exports = {
    register: register
};