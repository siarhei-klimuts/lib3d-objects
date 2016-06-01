var lib3d = require('lib3d');

var model = require('./model.json');

var map = require('./wallpaper_512x512.jpg');
var floor = require('./floor_512x512.jpg');
var bumpMap = require('./4268-bump.jpg');
var img = require('./wallpaper_512x512.jpg');

function register() {
    var library = new lib3d.LibraryData({
        name: 'library_0003',
        model: model,
        images: {
            map: map,
            floor: floor,
            bumpMap: bumpMap,
            img: img
        },
        materials: {
            wallpaper: {
                map: 'map',
                shininess: 0
            },
            floor: {
                map: 'floor',
                bumpMap: 'bumpMap',
                bumpScale: 0.003,
                shininess: 10
            }
        },
    });

    lib3d.registerLibrary(library);
}

module.exports = {
    register: register
};