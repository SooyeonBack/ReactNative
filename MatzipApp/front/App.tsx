import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import RootNavigator from './src/navigations/RootNavigator';

function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

export default App;
