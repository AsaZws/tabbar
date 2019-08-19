// 第一种配置别名的方法
// const path = require('path');

// function resolve(dir) {
//     return path.join(__dirname, dir);
// }

// module.exports = {
//     lintOnSave: true,
//     chainWebpack: (config) => {
//         config.resolve.alias
//             .set('@', resolve('src'))
//             .set('assets', resolve('src/assets'))
//             .set('components', resolve('src/components'))
//             .set('views', resolve('src/views'));
//     }
// }

// 第二种配置别名的方法
module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'components': '@/components',
                'views': '@/views'
            }
        }
    }
}