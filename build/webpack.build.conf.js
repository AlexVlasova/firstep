const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// const PAGES_DIR_REG = `${PATHS.src-reg}/pug/pages/`
// const PAGES_REG = fs.readdirSync(PAGES_DIR_REG).filter(fileName => fileName.endsWith('.pug'))

// const PAGES_DIR_MAIN = `${PATHS.src-main}/pug/pages/`
// const PAGES_MAIN = fs.readdirSync(PAGES_DIR_MAIN).filter(fileName => fileName.endsWith('.pug'))

const page_reg = 'register-page.pug';
const page_main = 'main-page.pug';

const buildWebpackConfig = merge(baseWebpackConfig, {
  // BUILD config
  mode: 'production',
  plugins: [
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
  resolve(buildWebpackConfig)
})
