const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const devMode = process.env.NODE_ENV !== 'production';

module.exports = (env, argv) => { 
	console.log(`mode: ${argv.mode}`);

	return {
		entry: './src/index',

		output: {
			filename: '[name].bundle.js',
			path: path.resolve(__dirname, 'dist')
		},

		plugins: [
			new MiniCssExtractPlugin({
				filename: 'styles/[name].[hash].css',
				chunkFilename: 'styles/[id].[hash].css',
			}),
			new UglifyJSPlugin(),
			new HtmlWebpackPlugin({
				title: "Output management",
				template: 'src/assets/html/index.html'
			}),
		],

		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					include: path.resolve(__dirname, "src"),
					loader: 'babel-loader',

					options: {
						presets: ['env']
					}
				},
				{
					test: /\.(png|svg|jpg|gif)$/,
					use: [
						'file-loader'
					]
				},
				{
					test: /\.(woff|woff2|eot|ttf|otf)$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[name].[ext]',
								outputPath: 'assets/fonts/'
							}
						}
					]
				},
				{
					test: /\.(scss|css)$/,
					use: [
						{ loader: MiniCssExtractPlugin.loader,
							options: { publicPath: '../' } 
						},
						{
							loader: 'css-loader'
						},
						{
							loader: 'sass-loader'
						}
					]
				}
			]
		},

		devServer: {
			contentBase: "./dev",
			compress: true,
			port: "9000"
		},
		watchOptions: {
			aggregateTimeout: 300,
			poll: 1000,
			ignored: /node_modules/
		},
		resolve: {
			alias: {
				fontello: path.resolve(__dirname, 'src/assets/icons/fontello-icons')
			}
		}
		// devtool: 'source-map' // CSS source not shown in devtools
	}
};
