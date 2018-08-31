import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

// tab
import NewsIndexScreen from './tabs/news';
import MeIndexScreen from './tabs/me';
// stack
import SignScreen from './pages/sign';
import NewsDetailScreen from './pages/newsDetail';
import MeDetailScreen from './pages/meDetail';

// stack页面----------------------------------------------------
const NewsStack = createStackNavigator({
  NewsIndexStack: {
    screen: NewsIndexScreen,
    navigationOptions: { headerTitle: '资讯' },
  },
  NewsDetailStack: {
    screen: NewsDetailScreen,
    navigationOptions: { headerTitle: '详情' },
  },
}, {
  headerMode: 'none',
});
const MeStack = createStackNavigator({
  MeIndexStack: {
    screen: MeIndexScreen,
    navigationOptions: { headerTitle: '我的' },
  },
  MeDetailStack: MeDetailScreen,
}, {
  headerMode: 'none',
});

// tab页面
const Tabs = createBottomTabNavigator({
  NewsIndexTab: {
    screen: NewsStack,
    navigationOptions: () => ({ tabBarLabel: '资讯' }),
  },
  MeIndexTab: {
    screen: MeStack,
    navigationOptions: () => ({ tabBarLabel: '我的' }),
  },
}, {
  tabBarOptions: {
    activeTintColor: '#222',
    inactiveTintColor: 'gray',
  },
  // 非根目录不显示Tab bar
  navigationOptions: ({ navigation }) => {
    const { index } = navigation.state;
    const tabBarVisible = index === 0;
    return ({
      tabBarVisible,
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'NewsIndexTab') {
          iconName = `ios-radio-button-${focused ? 'on' : 'off'}`;
        } else if (routeName === 'MeIndexTab') {
          iconName = `${focused ? 'ios-happy' : 'md-sad'}`;
        }
        return <Ionicons name={iconName} size={24} color={tintColor} solid />;
      },
    });
  },
});

const AppFinal = createStackNavigator({
  Tabs: {
    screen: Tabs,
  },
  SignStack: {
    screen: SignScreen,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
  gesturesEnabled: false,
});
export default AppFinal;
