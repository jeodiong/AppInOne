import { createStackNavigator } from 'react-navigation';

import PageIndexScreen from './pages/index';
import PageIndexDetailScreen from './pages/index-detail';

const Index = createStackNavigator({
  PageIndex: {
    screen: PageIndexScreen,
    navigationOptions: { headerTitle: 'tab1' },
  },
  PageIndexDetail: {
    screen: PageIndexDetailScreen,
    navigationOptions: { headerTitle: 'stab2' },
  },
}, {
  // mode: 'modal',
  // headerMode: 'none',
});

export default Index;
