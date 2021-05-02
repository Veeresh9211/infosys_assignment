import './App.scss';
import Home from './components/home/home';
import CaseList from './components/casesList/casesList';
import TestList from './components/testList/testList';
import EachCase from './components/eachCase/eachCase';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/caseList" component={CaseList}></Route>
        <Route path="/testList" component={TestList}></Route>
        <Route path="/detailsView" component={EachCase}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
