import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from 'react-router-dom';
import SideMenu from '../components/SideMenu';
import { makeStyles, CssBaseline, createTheme, ThemeProvider } from '@material-ui/core';
import Header from '../components/Header';
import PageHeader from '../components/PageHeader';

import Patient from '../pages/Patients/Patient';
import DataDisplay from '../pages/DataDisplay/DataDisplay';
import DataEntry from '../pages/DataEntry/DataEntry';

const theme = createTheme({
  palette   : {
    primary    : {
      main  : '#333996',
      light : '#3c44b126'
    },
    secondary  : {
      main  : '#f83245',
      light : '#f8324526'
    },
    background : {
      default : '#f4f5fd'
    }
  },
  overrides : {
    MuiAppBar : {
      root : {
        transform : 'translateZ(0)'
      }
    }
  },
  props     : {
    MuiIconButton : {
      disableRipple : true
    }
  }
});

const useStyles = makeStyles({
  appMain : {
    paddingLeft : '320px',
    width       : '100%'
  }
});

function App() {
  const classes = useStyles();

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/exam'>Exam</Link>
            </li>
            <li>
              <Link to='/view'>View</Link>
            </li>
          </ul>
        </nav>

        <ThemeProvider theme={theme}>
          <SideMenu />
          <div className={classes.appMain}>
            <Header />
            <Switch>
              <Route exact path='/view'>
                <DataDisplay />
              </Route>
              <Route exact path='/exam'>
                <Patient />
              </Route>
              <Route path='/view/:id' render={props => <DataEntry {...props} />} />
            </Switch>
          </div>
          <CssBaseline />
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
