import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import MapView from 'react-native-maps'
import Markers from './components/Markers'
import Region from './components/Region'

export default class App extends Component {
  render() {
    return (
      <Markers/>
    )
  }
}
