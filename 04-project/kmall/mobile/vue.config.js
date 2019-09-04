const path = require('path')

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/assets/less/index.less')
      ]
    }
  },    
  devServer:{
    port:3003
  },
  chainWebpack:config =>{
    config.resolve.alias
    .set('pages',path.resolve(__dirname,'./src/pages'))
    .set('api',path.resolve(__dirname,'./src/api'))
  }   
}