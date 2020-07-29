import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import WorkoutList from './workouts/WorkoutList';
import WorkoutCreate from './workouts/WorkoutCreate';
import WorkoutEdit from './workouts/WorkoutEdit';
import WorkoutDelete from './workouts/WorkoutDelete';
import WorkoutShow from './workouts/WorkoutShow';
import Header from './Header';

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Route path="/" exact component={WorkoutList} />
        <Route path="/workouts/new" exact component={WorkoutCreate} />
        <Route path="/workouts/edit" exact component={WorkoutEdit} />
        <Route path="/workouts/delete" exact component={WorkoutDelete} />
        <Route path="/workouts/show" exact component={WorkoutShow} />
      </BrowserRouter>
    </div>
  )
};

export default App;
