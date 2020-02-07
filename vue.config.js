module.exports = {
  configureWebpack:{
    resolve: {
      alias: {
        // "@": 'src'
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}