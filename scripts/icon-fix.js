const fs = require('fs')

try {
  console.log('antd  icon fix...')
  const rootDir = process.cwd()
  const file = `${rootDir}/node_modules/@ant-design/icons-react-native/react-native.config.js`
  const data = `
    module.exports = {
      dependency: {
        assets: ['fonts']
      }
    };
  `
  fs.writeFileSync(file, data, 'utf8')
  console.log('Fixed Done')
} catch (error) {
  console.error(error)
}