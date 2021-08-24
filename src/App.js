import React from 'react';
import {Link, Route, HashRouter, BrowserRouter} from "react-router-dom";
import {withStyles, Container} from "@material-ui/core";
import NavTabs from './components/Navbar'
import {MainBody} from './pages/Home'
import Footer from './components/Footer'
import About from "./pages/About/About";
import {Contact} from "./pages/Contact/Contact";


const useStyles = ((theme) => ({
  root: {

  },
  mainParts: {
    marginTop: '140px',
    marginBottom:'0px',
  },
}));

class App extends React.Component {
  render() {
    const {classes} = this.props;

    return (
        <div className={classes.root}>

          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <NavTabs/>
            <div className={classes.mainParts}>
              <Route  path='/' exact component={MainBody}/>
              <Route  path={process.env.PUBLIC_URL + '/ABout'} component={About}/>
              <Route  path={process.env.PUBLIC_URL + '/Contact'} components={Contact}/>
            </div>
          </BrowserRouter >
          <Footer/>
        </div>
    );
  }
}

export default withStyles(useStyles)(App);
