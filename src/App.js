import './App.scss';
<<<<<<< HEAD
import React,{useState, useEffect} from 'react';
=======
>>>>>>> 9e85ae464b150797183d5bad4b6959ba940bfcde
import Home from './components/home/home';
import CaseList from './components/casesList/casesList';
import TestList from './components/testList/testList';
import EachCase from './components/eachCase/eachCase';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './components/header/header';
import Settings from './components/settings/settings';
import {connect} from 'react-redux';
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Theme";

function App({themeL}) {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeProvider theme={themeL === false ? lightTheme : darkTheme}>
      <GlobalStyles/>
      {themeL}
      <BrowserRouter>
      <Header/>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/caseList" component={CaseList}></Route>
          <Route path="/testList" component={TestList}></Route>
          <Route path="/detailsView" component={EachCase}></Route>
          <Route path="/settings" component={Settings}></Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) =>{
  debugger
  return{
    themeL: state.themme.theme
  }
}
export default connect(mapStateToProps)(App);
