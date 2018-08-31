import React, { Component } from 'react';
import {
  StyleSheet, Text, Button,
} from 'react-native';
import { human } from 'react-native-typography';
import { connect } from 'react-redux';
import { INCREASE_FUNC, DECREASE_FUNC } from '../../../redux/actions/counter';
import Styled from '../../../styled-components';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n',
//   android:
//     'Double tap R on your keyboard to reload,\n'
//     + 'Shake or press menu button for dev menu',
// });

type Props = {};
class NewsIndexStack extends Component<Props> {
  render() {
    const { navigation } = this.props;
    const { counter, dispatchIncreaseFunc, dispatchDecreaseFunc } = this.props;
    return (
      <Styled.SafeArea style={styles.temp}>
        <Text style={human.headline}>Hello Human!</Text>
        {/* <Styled.H1 style={styles.H1}>你好，人类!</Styled.H1>
        <Styled.H2 style={styles.H2}>你好，人类!</Styled.H2>
        <Styled.H3 style={styles.H3}>你好，人类!</Styled.H3>
        <Styled.H4 style={styles.H4}>你好，人类!</Styled.H4>
        <Styled.Pbody style={styles.Pbody}>你好，人类!</Styled.Pbody>
        <Styled.Pcaption style={styles.Pcaption}>你好，人类!</Styled.Pcaption> */}
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
      </Styled.SafeArea>
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
