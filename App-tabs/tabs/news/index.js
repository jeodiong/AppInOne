import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, Button, SafeAreaView,
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n',
  android:
    'Double tap R on your keyboard to reload,\n'
    + 'Shake or press menu button for dev menu',
});

type Props = {};
export default class NewsIndexStack extends Component<Props> {
  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <Text>{instructions}</Text>
        <Button
          title="Go to Sign"
          onPress={() => navigation.navigate('SignStack')}
        />
        <Button
          title="Go to detail"
          onPress={() => navigation.navigate('NewsDetailStack')}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
});
