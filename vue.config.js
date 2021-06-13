module.exports = {
  devServer: {
    watchOptions: {
      poll: true
    }
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Login Test'
        return args
      })
  }
}