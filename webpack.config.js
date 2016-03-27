var webpack = require('webpack');
var path = require('path');

var config = {
    watch: false,
    entry: {
        app: [path.resolve(__dirname, './src/index.js')]
    },
    output: {
        pathinfo: true,
        path: path.join(__dirname, 'dist'),
        publicPath: '',
        filename: 'lib3d-objects.js',
        libraryTarget: 'umd',
        library: 'lib3dObjects'
    },
    module: {
        loaders: [
            {test: /\.json/, loader: 'json'},
            {test: /\.(png|jpg)$/, loader: 'file?context=./src&name=[path][name].[ext]'} 
        ]
    },
    plugins: [],
    resolve: {
        root: path.join(__dirname, 'src')
    }
};

process.env.NODE_ENV = 'production';
if (process.env.NODE_ENV === 'production') {
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({minimize: true}));
    config.devtool = 'source-map';
} else {
    config.devtool = 'eval';
}

module.exports = config;