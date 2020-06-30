//因为vuecli3把webpack的配置隐藏了，并且也不建议我们从node_modules文件夹里更改
//所以我们创建一个新的配置文件
//来配置路径别名，方便写代码

module.exports = {
  //把配置写到configureWebpack里，表示要配置webpack
  configureWebpack:{
    resolve: {
      //原本的webpack配置里，已经配置了'@': 'src'，所以这里可以不用配置，并且在vuecli3中接下来的配置可以直接应用这个@
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'common': '@/common',
        'network': '@/network',
        'views': '@/views'
        //router和store不用配置，因为在全局都可以使用this.$router和this.$store拿到这两个东西
      }
    }
  }
}

//然鹅以上的配置方法只适用于cli3,cli4按下面的方法配置
//然鹅的然鹅，其实上面的方法好像在cli4里也可以。。。。那为啥一开始不可以呜呜


// const path = require('path');
// module.exports = {

// 	chainWebpack: (config)=>{
// 	    config.resolve.alias
// 	      .set('@', path.join(__dirname,'src'))
// 	      .set('components', path.join(__dirname,'src/components'))
// 	      .set('common', path.join(__dirname,'src/common'))
//         .set('network', path.join(__dirname,'src/network'))
//         .set('assets', path.join(__dirname,'src/assets'))
//         .set('views', path.join(__dirname,'src/views'))
//   	},

// }
