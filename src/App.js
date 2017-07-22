import React from 'react';
import ListPaginationWrapper from './components/list-pagination-wrapper/ListPaginationWrapper';
import Book from './components/booking-page/Book';
import Thanks from './components/thanks-page/Thanks';
import SinglePage from './components/single-item/SinglePage';
import './css/reset.css';
import './css/base.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import history from './history'



const App = () => (


  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/:id" component={(match) => <SinglePage params={match.match.params} />} />
      <Route exact path="/book/:id" component={(match) => <Book params={match.match.params} />} />
      <Route exact path="/thanks" component={Thanks} />
    </div>
  </Router>
)

const Home = () => (
  
    <ListPaginationWrapper history={history} />
)


export default App
