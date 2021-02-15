import React from 'react';
import {Provider} from 'react-redux';
import {MuiThemeProvider} from '@material-ui/core/styles';
import {
  BrowserRouter as Router, 
  Route, 
  Switch
} from 'react-router-dom';

import theme from './theme/theme';
import HomeScreen from './screens/Home';
import store from './store';
import { GlobalStyles } from './styles/GlobalStyles';

const  App = () => (
  <>
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path={["/", "/home"]} component={HomeScreen} exact={true} />
          </Switch>
        </Router>
      </MuiThemeProvider>
    </Provider>

    <GlobalStyles />
  </>
)

export default App;
