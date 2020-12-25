export default {
  pages: preval`
  module.exports=(function() {
    if (process.env.TARO_ENV === 'weapp') {
      return [
        'pages/index/index',
      ]
    }
    else if (process.env.TARO_ENV === 'alipay') {
      return [
        'pages/index/index',
      ]
    }
  })()`
  ,
  // pages:['pages/index/index'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
