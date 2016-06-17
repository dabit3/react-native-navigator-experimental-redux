import React from 'react'
import { AppRegistry } from 'react-native'

import configureStore from './app/store/configureStore'
const store = configureStore()

import NavigationRootContainer from './app/containers/navRootContainer'
import { Provider } from 'react-redux'

const RNRedux = () => (
  <Provider store={store}>
    <NavigationRootContainer />
  </Provider>
)
AppRegistry.registerComponent('RNRedux', () => RNRedux)
