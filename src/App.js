import React from 'react';
import Header from './components/Header';
import ListPaginationWrapper from './components/list-pagination-wrapper/ListPaginationWrapper';
import Filter from './components/Filter';
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
      <Header/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/:id" component={(match) => <SinglePage params={match.match.params}/>} />
      <Route exact path="/book/:id" component={(match) => <Book params={match.match.params}/>} />
      <Route exact path="/thanks" component={Thanks}/>
    </div>
  </Router>
)

const Home = () => (
  <div className="HomePage">
    <div className="container">
      <div className="right-side">
        <div className="sponsored">
          <span>برعاية</span>
          <img src="/img/right-sponsored.png" alt="sponsored"/>
        </div>
        <Filter/>
      </div>
      <ListPaginationWrapper history={history} />
      <div className="sponsored middle">
        <span>برعاية</span>
        <img src="/img/middle-sponsored.png" alt="sponsored"/>
      </div>
    </div>
  </div>
)


export default App
