import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';
import {
  AdMobBanner,
} from 'react-native-admob';

import { INCREASE_FUNC, DECREASE_FUNC } from '../../../redux/actions/counter';
import Styled from '../../../styled-components';
import config from '../../../config';

import $api from '../../../api/index';

const { Banner } = firebase.admob;

type Props = {};
class NewsIndexStack extends Component<Props> {
  constructor() {
    super();
    this.state = {
    };
  }

  componentDidMount() {
    $api.sign.baidu().then((res) => {
      console.log(res);
    }).catch((err) => {
      console.error(err);
    });
  }

  render() {
    return (
      <Styled.SafeArea style={styles.temp} bg="white">
        <Banner unitId={config.admobIds.news1} />
        <Styled.Pbody style={styles.Pbody}>
          text production
        </Styled.Pbody>
        <AdMobBanner
          adSize="banner"
          adUnitID="ca-app-pub-6546234661958235/7558584498"
          testDevices={[AdMobBanner.simulatorId]}
        // onAdFailedToLoad={error => console.error(error)}
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
