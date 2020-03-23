import React from 'react';
import {ThemeProvider} from './src/UIKIT/dist';
import {Provider as PaperProvider} from 'react-native-paper';
import AppTheme from './src/Config/AppTheme';
import PaperTheme from './src/Config/PaperTheme';
import AppRouter from './src/Navigation/AppRouter/AppRouter';
import {Provider} from 'react-redux';
import Store from './src/Redux/Store';

function App() {
  return (
    <ThemeProvider value={AppTheme}>
      <PaperProvider theme={PaperTheme}>
        <Provider store={Store}>
          <AppRouter />
        </Provider>
      </PaperProvider>
    </ThemeProvider>
  );
}

export default App;
