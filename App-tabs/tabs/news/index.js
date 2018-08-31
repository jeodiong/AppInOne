import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, Button, SafeAreaView,
} from 'react-native';
import { connect } from 'react-redux';

import { INCREASE_FUNC, DECREASE_FUNC } from '../../../redux/actions/counter';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n',
  android:
    'Double tap R on your keyboard to reload,\n'
    + 'Shake or press menu button for dev menu',
});

type Props = {};
class NewsIndexStack extends Component<Props> {
  render() {
    const { navigation } = this.props;
    const { counter, dispatchIncreaseFunc, dispatchDecreaseFunc } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <Text>{instructions}</Text>
        <Button
          title="Go to Sign"
          onPress={() => navigation.navigate('SignIndexStack')}
        />
        <Button
          title="Go to detail"
          onPress={() => navigation.navigate('NewsDetailStack')}
        />
        <Button
          title="+"
          onPress={() => {
            dispatchIncreaseFunc();
          }}
        />
        <Text>
          {counter}
        </Text>
        <Button
          title="-"
          onPress={() => {
            dispatchDecreaseFunc();
          }}
        />
      </SafeAreaView>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatchIncreaseFunc: data => dispatch(INCREASE_FUNC(data)),
    dispatchDecreaseFunc: data => dispatch(DECREASE_FUNC(data)),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewsIndexStack);

const styles = StyleSheet.create({
});
