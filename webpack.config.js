module.exports = {
	entry: "./app/assets/scripts/app.js",
	output: {
		
		filename: "./app/temp/scripts/App.js"
	},
	module: {
		loaders: [
		{
			loader: 'babel-loader',
			query: {
				presets: ['es2015']
			},
			test: /\.js$/,
			exclude: /node_modules/
		}
		]
	}
	
}