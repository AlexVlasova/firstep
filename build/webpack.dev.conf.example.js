const webpack =  require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const page_reg = 'register-page.pug';
const page_main = 'main-page.pug';

const devWebpackConfig = merge(baseWebpackConfig, {
  // DEV config
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: baseWebpackConfig.externals.paths.dist,
    // host: 'firstep.love',
    port: 8081,
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: {
    
      // Для проксирования AJAX запросов, иначе будет ошибка политики доступа
      // С этой настройкой все запросы, содержащие '/api' будут переводиться с
      // 'http://mysite.test:8081 на http://mysite.test
      '/api': {
        target: 'http://firstep.love',
      }
    },
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map'
    }),

    // Обработка шаблона точки входа "back"
    new HtmlWebpackPlugin({
      // template: `${baseWebpackConfig.externals.paths.src_reg}/index.html`,
      // filename: `${baseWebpackConfig.externals.paths.dist}/mx_static/reception_points-vueapp-backend.php`,
      // template: `${PAGES_DIR_REG}/${page}`,
      template: `${baseWebpackConfig.externals.paths.src_reg}/${page_reg}`,
      // filename: `./${page.replace(/\.pug/,'.html')}`,
      filename: `${baseWebpackConfig.externals.paths.dist}/${page_reg.replace(/\.pug/,'.html')}`,
      // title: "mode_build", // Нужно для костыльного условия в шаблоне
      inject: false,
      chunks: baseWebpackConfig.externals.paths.reg_chunks,
    }),
    
    // Обработка шаблона точки входа "front"
    new HtmlWebpackPlugin({
      // template: `${baseWebpackConfig.externals.paths.src_main}/index.html`,
      // filename: `${baseWebpackConfig.externals.paths.dist}/mx_static/reception_points-vueapp-front.php`,
      // template: `${PAGES_DIR_MAIN}/${page}`,
      // filename: `./${page.replace(/\.pug/,'.html')}`,

      template: `${baseWebpackConfig.externals.paths.src_main}/${page_main}`,
      filename: `${baseWebpackConfig.externals.paths.dist}/${page_main.replace(/\.pug/,'.html')}`,

      // title: "mode_build", // Нужно для костыльного условия в шаблоне
      inject: false,
      chunks: baseWebpackConfig.externals.paths.main_chunks,
    }),
  ]
})

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig)
})
