import './App.scss';
import React,{useState, Suspense} from 'react';
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
import { useTranslation} from 'react-i18next';

const Loader = () => (
  <div>loading...</div>
);

function App({themeL}) {
  const [theme, setTheme] = useState('');
  const { t, i18n } = useTranslation();
  debugger
  return (
    <Suspense fallback={<Loader />}>
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
    </Suspense>
  );
}

const mapStateToProps = (state) =>{
  debugger
  return{
    themeL: state.themme.theme
  }
}
export default connect(mapStateToProps)(App);
