import React, { Component } from 'react'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import withShare from '../../utils/withShare';
import './index.scss'

// type PageStateProps = {
//   store: {
//     counterStore: {
//       counter: number,
//       increment: Function,
//       decrement: Function,
//       incrementAsync: Function
//     }
//   }
// }

// interface Index {
//   props: PageStateProps;
// }

@withShare({
  title: '好友邀您一起来美食流享受美食',
  imageUrl: 'https://res.cyoow.cn/image_yqxtV2.png',
  path: '/pages/index/index'
})

@inject('appStore')
@observer
class Index extends Component {
  onShareAppMessage (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123'
    }
  }
  onShareTimeline () {
    console.log('onShareTimeline')
    return {}
  }
  componentWillMount () {
    console.log(this.props.appStore)
    const { appStore } = this.props
    console.log(appStore.systemInfo)
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  increment = () => {
    // const { counterStore } = this.props.app
    // counterStore.increment()
  }

  decrement = () => {
    // const { counterStore } = this.props.store
    // counterStore.decrement()
  }

  incrementAsync = () => {
    // const { counterStore } = this.props.store
    // counterStore.incrementAsync()
  }

  render () {
    const { appStore } = this.props
    return (
      <View className='index'>
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
        <Button onClick={this.incrementAsync}>Add Async</Button>
        <Text>{'counter'}{JSON.stringify(appStore.systemInfo)}</Text>
      </View>
    )
  }
}

export default Index
