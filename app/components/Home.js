import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import Button from './Button'

class Home extends Component {
  navigate () {
    this.props._handleNavigate({
      type: 'push',
      route: {
        key: 'about',
        title: 'About'
      }
    })
  }
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Home</Text>
        <Button onPress={this.navigate.bind(this)} label='Go To About' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
    fontSize: 22,
    textAlign: 'center'
  },
  container: {
    paddingTop: 60
  }
})

export default Home
