var lib3d = require('lib3d');

var model = require('./model/model.json');

var wallpaper = require('./img/wallpaper.jpg');
var floor = require('./img/floor.jpg');
var wood = require('./img/wood.jpg');
var grass = require('./img/grass.jpg');
var img = require('./img/img.jpg');

var params = {
    name: 'library_0002',
    model: model,
    images: {
        wallpaper: wallpaper,
        floor: floor,
        wood: wood,
        grass: grass,
        img: img
    }
};

var textures = {
    wall: {
        map: 'wallpaper'
    },
    floor: {
        map: 'floor'
    },
    wood: {
        map: 'wood'
    },
    grass: {
        map: 'grass'
    }
};

var lights = [
    new THREE.AmbientLight(0x999999),
    new THREE.PointLight(0xAAAAAA, 1, 50)
];
lights[1].position.set(-3, 3, 0);

var boundingBox = {
    center: new THREE.Vector3(0.1, 1.25, -0.125),
    radius: new THREE.Vector3(2.75, 1.25, 2.6)
};

function register() {
    var libraryData = new lib3d.LibraryData(params, textures, lights, boundingBox);
    lib3d.registerLibrary(libraryData);
}

module.exports = {
    register: register
};