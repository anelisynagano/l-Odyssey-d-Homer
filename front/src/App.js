import React from 'react';
import './App.css';
import SignUp from './component/SignUp';
import SignIn from './component/SignIn';
import Profile from './component/Profile';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {Grid, Paper} from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom'


const theme = createMuiTheme();

function App() {
  return (
    <MuiThemeProvider theme={theme} >
      <Grid  container
        alignItems='center'
        style={{ height:  '100%' }}>
          <Grid  item xs={12}>
            <Paper
              elevation={4}
              style={{ margin:  32 }}
            >
                <Grid  container
                  alignItems='center'
                  justify='center'
                >
                  <Grid item xs={12} sm={6} style={{textAlign: 'center'}}>
                    <img
                      src='https://images.innoveduc.fr/react_odyssey_homer/wildhomer.png'
                      alt='Homer Simpson'
                  />
                </Grid>
                <Grid  item sm={6} xs={12}
                  alignContent='center'
                >
                <BrowserRouter>
                  <Switch>
                    <Route exact path="/" component={SignIn}/>
                    <Route path="/signin" component={SignIn}/>
                    <Route path="/signup" component={SignUp}/>
                    <Route path="/profile" component={Profile}/>
                  </Switch>
                </BrowserRouter>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
    </MuiThemeProvider>
  );
}

export default App;