import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View,
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n',
  android:
    'Double tap R on your keyboard to reload,\n'
    + 'Shake or press menu button for dev menu',
});

type Props = {};
export default class NewsDetailStack extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>newsDetail</Text>
        <Text>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
