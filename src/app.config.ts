let pages = []
if (process.env.TARO_ENV === 'weapp') {
  pages = ['pages/index/index',]
}
else if (process.env.TARO_ENV === 'alipay') {
  pages= [
    'pages/index/index',
  ]
}
export default {
  pages,
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
