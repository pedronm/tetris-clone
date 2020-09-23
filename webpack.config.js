const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        // Arquivos de entrada
        phaser: './src/phaser.js',
    },
    // Acompanhamento de erros(Facilita a encontrar o arquivo que causou mais facilmente)
    devtool: 'inline-source-map',
    // Onde o WebPack Server deve procurar pelos arquivos.
    devServer: {
        contentBase: './dist',   
    },
    plugins: [
        // Faz uma limpeza do /dist
        // new CleanWebpackPlugin(),
        // Configura o plugin de limpeza para não elimnar o index.html quando estivrer em modo --watch
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        // Gerencia os arquivos de entrada, adicionando, removendo ou renomeando de acordo com 
        // Os arquivos no /src
        new HtmlWebpackPlugin({
          title: 'Output Management',
        }),
        
    ],
    //O output está configurado para gerar o js no dist de acordo com o nome do arquivo.
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
};