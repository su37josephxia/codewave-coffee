module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
  },
  mini: {},
  h5: {},
  plugins: [
    // '@tarojs/plugin-mock',
    // 引入 npm 安装的插件，并传入插件参数
    // ['@tarojs/plugin-mock', {
    //   host: "localhost",
    //   port: 9999,
    //   mocks: {
    //     'GET /api/getTitleConfig': {
    //       data: [{
    //         url: "dda",
    //         name: "dda",
    //       },
    //       {
    //         url: "da",
    //         name: "第一个页面",
    //       },
    //       {
    //         url: "dc",
    //         name: "第三个页面",
    //       },
    //       {
    //         url: "d",
    //         name: "第二个页面",
    //       }]
    //     },
      
    //     "GET /api/getOpenid": {
    //       openid: "fafdasfdafdafd"
    //     }
    //   },
    // }
    // ]
  ]
}
