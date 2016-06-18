import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const Recipes = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Hello from Recipes!</Text>
    <Image
      style={styles.image}
      source={{ uri: 'https://i.imgur.com/zwx84jE.png' }}/>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#10a2f0',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    marginTop: 100,
    fontSize: 24,
    textAlign: 'center'
  },
  image: {
    width: 250,
    height: 250
  }
})

export default Recipes
