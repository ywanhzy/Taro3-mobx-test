
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const TerserPlugin = require("terser-webpack-plugin");

const config = {
  projectName: 'taro3-mobx-demo',
  date: '2020-12-17',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [],
  defineConstants: {
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  terser: {
    enable: true,
    config: {
      // 配置项同 https://github.com/terser/terser#minify-options
    }
  },
  framework: 'react',
  mini: {
    webpackChain(chain, webpack) {

      // chain.plugin('analyzer')
      //   .use(BundleAnalyzerPlugin, [{
      //     analyzerMode: "server",
      //     analyzerHost: "127.0.0.1",
      //     analyzerPort: 8881, // 运行后的端口号
      //     reportFilename: "report.html",
      //     defaultSizes: "parsed",
      //     openAnalyzer: true,
      //     generateStatsFile: false,
      //     statsFilename: "stats.json",
      //     statsOptions: null,
      //     logLevel: "info"
      //   }]);

      chain.mode("production");
      chain.optimization.minimize(true); //压缩
      chain.plugin("terser").use(TerserPlugin, [
        {
          extractComments: false, //禁用提取注释
          terserOptions: {
            output: {
              comments: false,   //去掉注释
            },
            warnings: false,
            // compress: {
            //   drop_console: true, 
            //   drop_debugger: false,
            //   pure_funcs: ['console.log'] 
            // },
          }
        }
      ]);
      // chain.merge({
      //   plugin: {
      //     install: {
      //       plugin: require('webpack-bundle-analyzer').BundleAnalyzerPlugin,
      //       args: [{
      //         analyzerMode: 'static',
      //         defaultSizes: 'gzip',
      //         analyzerPort: 8880
      //       }]
      //     }
      //   }
      // })
    },
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
