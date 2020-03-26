const path = require('path');
const webpack = require('webpack');
module.exports = {
    context: __dirname,
    entry: './frontend/crypto_list.jsx',
    output: {
        path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['@babel/env', '@babel/react']
                    }
                },
            },
        ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: [".js", ".jsx", "*"]
    },
    plugins: [    
        new webpack.DefinePlugin({           
          COINMARKETCAP_API_KEY: JSON.stringify(process.env.COINMARKETCAP_API_KEY)
        })
      ],      
};
