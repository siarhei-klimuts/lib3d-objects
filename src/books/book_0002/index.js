var lib3d = require('lib3d');

var model = require('./model.json');

var map = require('./map.jpg');
var bumpMap = require('./bump_map.jpg');
var specularMap = require('./specular_map.jpg');
var img = require('./img.jpg');

function register() {
    var book = new lib3d.BookData({
        name: 'book_0002',
        model: model,
        images: {
            map: map,
            bumpMap: bumpMap,
            specularMap: specularMap,
            img: img
        }
    });

    lib3d.registerBook(book);
}

module.exports = {
    register: register
};