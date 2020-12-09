const path = require('path')
const { merge } = require('webpack-merge')

const baseConfig = require('./configs/webpack.base')

/**
 *
 * @param {object} env An environment variable as first argument
 * @param {*} argv Option map as second variable
 */
module.exports = (env, argv) => {
    // Destructuring argv
    const { mode = 'development' } = argv

    // Destructuring env
    const { presets = [] } = env

    console.log(`Building for: ${mode}`)
    console.log('Environment', env)

    const rootDir = path.resolve(__dirname)

    const modeConfig = (mode) =>
        require(path.join(rootDir, 'configs', `webpack.${mode}.js`))
    const presetConfig = require(path.join(
        rootDir,
        'configs',
        'load-presets.js'
    ))

    return merge(
        baseConfig(),
        modeConfig(mode),
        presetConfig({
            mode,
            presets,
        })
    )
}
