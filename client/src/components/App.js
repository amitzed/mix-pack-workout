import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import WorkoutList from './workouts/WorkoutList';
import WorkoutCreate from './workouts/WorkoutCreate';
import WorkoutEdit from './workouts/WorkoutEdit';
import WorkoutDelete from './workouts/WorkoutDelete';
import WorkoutShow from './workouts/WorkoutShow';
import WorkoutVideos from './workouts/video-viewer/WorkoutVideos';
import Bench from './workouts/instructions/bench';
import Deadlift from './workouts/instructions/deadlift';
import Overhead from './workouts/instructions/overhead';
import Row from './workouts/instructions/row';
import Squat from './workouts/instructions/squat';
import Header from './Header';
import Footer from './Footer';
import Stopwatch from './Stopwatch';

import history from '../history';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <Header />
        <Switch>
          <Route path="/" exact component={WorkoutList} />
          <Route path="/workouts/new" exact component={WorkoutCreate} />
          <Route path="/workouts/edit/:id" exact component={WorkoutEdit} />
          <Route path="/workouts/delete/:id" exact component={WorkoutDelete} />
          <Route path="/workouts/stopwatch" exact component={Stopwatch} />
          <Route path="/workouts/videos" exact component={WorkoutVideos} />
          <Route path="/workouts/bench" exact component={Bench} />
          <Route path="/workouts/deadlift" exact component={Deadlift} />
          <Route path="/workouts/overhead" exact component={Overhead} />
          <Route path="/workouts/row" exact component={Row} />
          <Route path="/workouts/squat" exact component={Squat} />
          <Route path="/workouts/:id" exact component={WorkoutShow} />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
};

export default App;
