const fs = require('fs')
const path = require('path')

function log () {
    console.log(`[img-cli] No config file [img.config.js] found!`)
    return {}
}

function getConfig () {
    const cwd = process.cwd()
    const configName = 'img.config.js'
    const configPath = path.join(cwd, configName)

    if (fs.existsSync(configPath)) {
        const imgConfig = require(configPath)

        if (imgConfig) {
            return imgConfig
        }
    }
}

module.exports = function getConfigFile () {
    const config1 = getConfig()
    if (config1) {
        return config1
    }

    return log()
}
