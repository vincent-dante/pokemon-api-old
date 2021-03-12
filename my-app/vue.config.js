module.exports = {

  configureWebpack: {
    devServer: {
      historyApiFallback: true,
      proxy: {
        '^/pokemon': {
          target: 'http://localhost:3000',
          changeOrigin: true
        },
      }      
    }
  }

};