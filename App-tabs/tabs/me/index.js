import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';
import Styled from '../../../styled-components';

type Props = {};
export default class MeIndexStack extends Component<Props> {
  render() {
    return (
      <Styled.SafeArea style={styles.temp} bg="white">
        <Styled.Pbody style={styles.Pbody}>
          me
        </Styled.Pbody>
      </Styled.SafeArea>
    );
  }
}

const styles = StyleSheet.create({
});
