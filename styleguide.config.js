const path = require('path')

const getComponentName = componentPath => {
  const dir = path.dirname(componentPath)
  const arrDir = dir.split('/')
  const name = arrDir[arrDir.length - 1]
  return name
}

module.exports = {
  getComponentPathLine(componentPath) {
    const name = getComponentName(componentPath)
    if (name === 'components') return ''
    return `import ${name} from '../components/${name}'`
  },
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    }
  }
}
