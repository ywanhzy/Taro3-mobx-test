import Taro, { getCurrentInstance } from '@tarojs/taro'

import React, { Component } from 'react'
import { Provider } from 'mobx-react'
import * as store from './store/index'
// import counterStore from './store/counter'
// import appStore from './store/app'

import './app.scss'

// const store = {
//   appStore
// }

class App extends Component {
  componentDidMount () {
    const info = Taro.getSystemInfoSync();
    // console.log('SystemInfoModel', info)
    store.appStore.setSystemInfo(info)
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 就是要渲染的页面
  render () {
    return (
      <Provider {...store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
