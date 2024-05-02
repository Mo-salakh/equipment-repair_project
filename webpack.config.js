const path = require('path');
const HTMLwebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: path.resolve(__dirname, './src/js/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        assetModuleFilename: '[name][ext]'
    },
    plugins: [
        new HTMLwebpackPlugin({
            template: './src/index.html',
            burger: './src/burger.html',
            service: './src/service.html',

        })
    ],
    devServer: { //локальный сервер
        port: 9000, //Рандомный порт
        compress: true, // Позволяет сжиматся контенту в момент появления на сервере
        hot: true, //Автоперезагрузка сервера при изменениях
        static: {
            directory: path.join(__dirname, 'dist') //Позволяет показывать файлы в папке дист
        }
        // Для активации пишем npx webpack-dev-serve
        // Для деактивациu нажимаем на ctrl + c
    },
    module: {
        rules: [
            {

                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader,'style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                type: 'asset/resource',
                use: ['file-loader']
            },
        ]
    }
}