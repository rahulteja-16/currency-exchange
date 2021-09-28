const { merge } = require('webpack-merge')
const { getWPConfig } = require('./webpack.common.js')

module.exports = (envVars) => {
	const { env } = envVars
	const envConfig = require(`./webpack.${env}.js`)
	const commonConfig = getWPConfig(env)
	const config = merge(commonConfig, envConfig)
	return config
}
