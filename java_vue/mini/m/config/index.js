const config = {
  projectName: 'myApp',
  date: '2023-1-10',
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
  framework: 'vue',
  mini: {
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
    },
    addChunkPages(pages) {
      pages.set("pages/index/index", ["config"])
      pages.set("pages/userinfo/index", ["config"])
      pages.set("pages/userphone/index", ["config"])
      pages.set("pages/getlocation/index", ["config"])
      pages.set("pages/scancode/index", ["config"])
    },
    webpackChain: (chain, webpack) => {
      chain.optimization.splitChunks({
        minSize: 1,
        // maxSize: 100000,
        cacheGroups: {
          config: {
            test: /[\\/]utils[\\/]config/,
            name: "config",
            chunks: "all",
            priority: 10,
            // minChunks: 2,
            // hidePathInfo: false,
            reuseExistingChunk: false,
          },
        },
      });
    },
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
