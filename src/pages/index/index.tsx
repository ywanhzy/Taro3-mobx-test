import React, { Component } from 'react'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from 'mobx-react'

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

@inject('app')
@observer
class Index extends Component {
  componentWillMount () {
    const { systemInfo } = this.props.app
    console.log(systemInfo)
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
    const { systemInfo } = this.props.app
    return (
      <View className='index'>
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
        <Button onClick={this.incrementAsync}>Add Async</Button>
        <Text>{'counter'}</Text>
      </View>
    )
  }
}

export default Index
