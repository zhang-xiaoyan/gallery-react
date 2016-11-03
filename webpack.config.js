var path = require("path");
module.exports = {
    entry:{
        build:"./react/index.js"
    },
    output:{
        path:"./react_build/",
        filename:"[name].js"
    },
    module:{
        loaders:[
            {
                test:/\.css$/,
                loaders:["style","css"],
                exclude:"node_modules"
            },
            {
                test:/\.jsx?$/,
                loaders:["react-hot","babel?presets[]=es2015&presets=react"],
                exclude:"node_modules",
                include:path.resolve(__dirname,"react")
            },
            {
                test: /\.json$/,
                loader: 'json',
                exclude:"node_modules"
            },
            {
                test: /\.(jpg|png)$/,
                loader: "url?limit=8192",
                exclude:"node_modules"
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                loader: 'file'
            }
        ]
    },
    resolve:{
        extensions:["",".js",".css",".jsx"]
    }
};