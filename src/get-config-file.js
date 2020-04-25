const fs = require('fs')
const path = require('path')

function log () {
    // console.info(`[img-cli] No config file [img.config.js] found!`)
    return {}
}

function getConfig () {
    const configPath = path.join(process.env.HOME, '.img/config.js')

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
