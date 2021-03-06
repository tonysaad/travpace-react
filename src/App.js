import React from 'react';
import ListPaginationWrapper from './components/list-pagination-wrapper/ListPaginationWrapper';
import Book from './components/booking-page/Book';
import Thanks from './components/thanks-page/Thanks';
import SinglePage from './components/single-item/SinglePage';
import Header from './components/Header';
import Dashboard from './components/Dashboard/Dashboard';
import PageNotFound from './components/PageNotFound';

import './css/reset.css';
import './css/base.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import history from './history'



const App = () => (


  <Router>
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:id" component={(match) => <SinglePage params={match.match.params} />} />
        <Route exact path="/book/:id" component={(match) => <Book params={match.match.params} />} />
        <Route exact path="/thanks" component={Thanks} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </Router>

)

const Home = () => (
  
    <ListPaginationWrapper history={history} />
)



export default App
