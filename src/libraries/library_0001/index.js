var lib3d = require('lib3d');

var model = require('./model/model.json');

var wall = require('./img/wall.jpg');
var wallBumpMap = require('./img/wall_bump.png');
var floor = require('./img/floor.jpg');
var floorBumpMap = require('./img/floor_bump.png');
var roof = require('./img/roof.jpg');
var roofBumpMap = require('./img/roof_bump.png');
var wood = require('./img/wood.jpg');
var img = require('./img/img.jpg');

var params = {
    name: 'library_0001',
    model: model,
    images: {
        wall: wall,
        wallBumpMap: wallBumpMap,
        floor: floor,
        floorBumpMap: floorBumpMap,
        roof: roof,
        roofBumpMap: roofBumpMap,
        wood: wood,
        img: img
    }
};

var textures = {
    wall: {
        map: 'wall',
        bumpMap: 'wallBumpMap',
        bumpScale: 0.003
    },
    floor: {
        map: 'floor',
        bumpMap: 'floorBumpMap',
        bumpScale: 0.003
    },
    roof: {
        map: 'roof',
        bumpMap: 'roofBumpMap',
        bumpScale: -0.1
    },
    wood: {
        map: 'wood'
    },
    lamp: {
        emissive: new THREE.Color(0xFFFFFF)
    }
};

var lights = [
    new THREE.AmbientLight(0x666666),
    new THREE.PointLight(0x888888, 1.3, 10)
];
lights[1].position.set(0, 2.3, 0);

var boundingBox = {
    center: new THREE.Vector3(0, 1.167, -0.35),
    radius: new THREE.Vector3(4.1585, 1.167, 3.8)
};

function register() {
    var libraryData = new lib3d.LibraryData(params, textures, lights, boundingBox);
    lib3d.registerLibrary(libraryData);
}

module.exports = {
    register: register
};