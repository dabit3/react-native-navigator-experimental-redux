import React, { Component } from 'react'
import { View, NavigationExperimental, TabBarIOS } from 'react-native'
const { Reducer: NavigationReducer } = NavigationExperimental
const { JumpToAction } = NavigationReducer.TabsReducer

import Recipes from '../components/Recipes'
import Samples from '../components/Samples'
import Home from '../containers/navRootContainer'

class Tabs extends Component {
  _changeTab (i) {
    const { dispatch, changeTab } = this.props
    // dispatch(JumpToAction(i))
    changeTab(i)
  }
  _renderTabContent (key) {
    switch (key) {
      case 'home':
        return <Home />
      case 'recipes':
        return <Recipes />
      case 'samples':
        return <Samples />
      default:
        return <View />
    }
  }
  render () {
    const tabs = this.props.tabs.routes.map((tab, i) => {
      return (
        <TabBarIOS.Item key={tab.key}
          icon={tab.icon}
          selectedIcon={tab.selectedIcon}
          title={tab.title}
          onPress={() => this._changeTab(i)}
          selected={this.props.tabs.index === i}>
          {this._renderTabContent(tab.key)}
        </TabBarIOS.Item>
      )
    })
    return (
      <TabBarIOS tintColor='black'>
        {tabs}
      </TabBarIOS>
    )
  }
}

export default Tabs
