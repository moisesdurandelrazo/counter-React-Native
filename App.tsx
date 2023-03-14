import React from 'react';
import {SafeAreaView, Text, useColorScheme} from 'react-native';

import {Provider} from 'react-redux';
import {store} from './src/app/store';
import Counter from './src/components/Counter';
import ButtonRedux from './src/components/ButtonRedux';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <SafeAreaView>
        <Counter />
        <ButtonRedux />
      </SafeAreaView>
    </Provider>
  );
}

export default App;
