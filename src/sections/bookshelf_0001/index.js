var lib3d = require('lib3d');

var model = require('./model.json');
var data = require('./data.json');

var map = require('./map.jpg');
var img = require('./img.jpg');

function register() {
    var section = new lib3d.SectionData({
        name: 'bookshelf_0001',
        model: model,
        images: {
            map: map,
            img: img
        }
    }, data);

    lib3d.registerSection(section);
}

module.exports = {
    register: register
};