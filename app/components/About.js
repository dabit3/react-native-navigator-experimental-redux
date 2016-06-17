import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import Button from './Button'

const About = ({_goBack}) => (
  <View style={styles.container}>
    <Text style={styles.title}>About</Text>
    <Button onPress={_goBack} label='Go Back' />
  </View>
)

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

export default About
