var lib3d = require('lib3d');

var model = require('./model.json');

var wall = require('./img/wallpaper.jpg');
var floor = require('./img/floor.jpg');
var floorBumpMap = require('./img/floor_bump_map.png');
var img = require('./img/wallpaper.jpg');

var params = {
    name: 'library_0003',
    model: model,
    images: {
        wall: wall,
        floor: floor,
        floorBumpMap: floorBumpMap,
        img: img
    }
};

var textures = {
    wallpaper: {
        map: 'wall'
    },
    floor: {
        map: 'floor',
        bumpMap: 'floorBumpMap',
        bumpScale: 0.001
    },
    lamp: {
        emissive: new THREE.Color(0xFFFFFF)
    }
};

var lights = [
    new THREE.AmbientLight(0x888888),
    new THREE.PointLight(0x888888, 1.3, 10)
];
lights[1].position.set(0, 2.25, 0);

function register() {
    var libraryData = new lib3d.LibraryData(params, textures, lights);
    lib3d.registerLibrary(libraryData);
}

module.exports = {
    register: register
};