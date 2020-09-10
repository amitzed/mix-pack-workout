import React from 'react';
import { Router, Route } from 'react-router-dom';

import WorkoutList from './workouts/WorkoutList';
import WorkoutCreate from './workouts/WorkoutCreate';
import WorkoutEdit from './workouts/WorkoutEdit';
import WorkoutDelete from './workouts/WorkoutDelete';
import WorkoutShow from './workouts/WorkoutShow';
import Header from './Header';
import Footer from './Footer';
import Stopwatch from './Stopwatch';

import history from '../history';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <Header />
        <Route path="/" exact component={WorkoutList} />
        <Route path="/workouts/new" exact component={WorkoutCreate} />
        <Route path="/workouts/edit/:id" exact component={WorkoutEdit} />
        <Route path="/workouts/delete" exact component={WorkoutDelete} />
        <Route path="/workouts/show" exact component={WorkoutShow} />
        <Route path="/workouts/stopwatch" exact component={Stopwatch} />
        <Footer />
      </Router>
    </div>
  )
};

export default App;
