import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchWorkouts } from '../../actions';

class WorkoutList extends React.Component {

  componentDidMount() {
    this.props.fetchWorkouts();
  }

  renderAdmin(workout) {
    if(workout.userId === this.props.currentUserId) {
      return (
        <div className="" style={{margin: '1em'}}>
          <div className="two ui buttons">
            <Link to={`/workouts/edit/${workout.id}`} className="ui icon button blue pencil-icon-wrapper">
              <i className="icon pencil alternate" />
            </Link>
            <div className="or" data-aos="zoom-in"></div>
            <Link to={`workouts/delete/${workout.id}`} className="circular ui icon button red">
              <i className="icon trash alternate outline" />
            </Link>
          </div>
        </div>
      )
    }
  }

  renderCreate() {
    if(this.props.isSignedIn) {
      return (
        <div className="create-btn">
          <Link to="/workouts/new" className="ui button tiny test tint-icon-wrapper">
            <div className="center aligned">
              <i className="middle aligned icon tint tint-icon" />
              <p>Add New Workout</p>
            </div>
          </Link>
        </div>
      )
    }
  }

  renderSignedInMessage() {
    if(this.props.isSignedIn) {
      return (
        <div>
          <br />
          <span style={{color: 'red'}}>* Dummy data below for demo purposes, but you can create / edit / delete your own data *</span>
        </div>
      )
    }
  }

  renderSignedOutMessage() {
    if(!this.props.isSignedIn) {
      return (
        <div>
          <br />
          <span>Please Log In To Create Or View Your Workouts</span>
        </div>
      )
    }
  }

  renderList() {
    if(this.props.isSignedIn) {
      return this.props.workouts.map(workout => {
        return (
          <div className="ui two column centered workout-list-wrapper" key={workout.id}>
            <div className="ui segments">

              <Link to={`/workouts/${workout.id}`}>
                <div className="ui inverted center aligned segment calendar-icon-wrapper" style={{margin: '1em'}} data-aos="fade-up">
                  <i className="large middle aligned icon calendar alternate outline day-icon" />
                  <p>{workout.day}</p>
                </div>
              </Link>

              <div className="ui segments data-wrapper">
                <div className="ui inverted center aligned segment">
                  <Link to={`/workouts/${workout.id}`}>
                    <i className="large circular green flask icon flask-icon"></i>
                  </Link>
                  <p>
                    {
                      !workout.exercise1Title
                      ?
                      null
                      :
                      <span>Exercise 1: {workout.exercise1Title}</span>
                    }
                  </p>

                    {
                      !workout.exercise1Sets && !workout.exercise1Reps
                      ?
                      null
                      :
                      <div className="ui segments" data-aos="zoom-in">
                        <div className="ui horizontal segments">
                          <div className="ui secondary inverted segment">
                            <p>Sets: {workout.exercise1Sets}</p>
                          </div>
                          <div className="ui tertiary inverted segment">
                            <p>Reps: {workout.exercise1Reps}</p>
                          </div>
                        </div>
                      </div>
                    }

                  <p>
                    {
                      !workout.exercise2Title
                      ?
                      null
                      :
                      <span>Exercise 2: {workout.exercise2Title}</span>
                    }
                  </p>

                    {
                      !workout.exercise2Sets && !workout.exercise2Reps
                      ?
                      null
                      :
                      <div className="ui segments" data-aos="zoom-in">
                        <div className="ui horizontal segments">
                          <div className="ui secondary inverted segment">
                            <p>Sets: {workout.exercise2Sets}</p>
                          </div>
                          <div className="ui tertiary inverted segment">
                            <p>Reps: {workout.exercise2Reps}</p>
                          </div>
                        </div>
                      </div>
                    }

                  <p>
                    {
                      !workout.exercise3Title
                      ?
                      null
                      :
                      <span>Exercise 3: {workout.exercise3Title}</span>
                    }
                  </p>

                    {
                      !workout.exercise3Sets && !workout.exercise3Reps
                      ?
                      null
                      :
                      <div className="ui segments" data-aos="zoom-in">
                        <div className="ui horizontal segments">
                          <div className="ui secondary inverted segment">
                            <p>Sets: {workout.exercise3Sets}</p>
                          </div>
                          <div className="ui tertiary inverted segment">
                            <p>Reps: {workout.exercise3Reps}</p>
                          </div>
                        </div>
                      </div>
                    }

                  {
                    !workout.cardioTime || !workout.cardioType
                    ?
                    null
                    :
                    <div className="ui segments" data-aos="zoom-in">
                      <p>Cardio: {workout.cardioType}</p>
                      <div className="ui horizontal segments">
                        <div className="ui secondary inverted segment">
                          <p>Time: {workout.cardioTime}</p>
                        </div>
                      </div>
                    </div>
                  }

                </div>
              </div>
              {this.renderAdmin(workout)}
            </div>
          </div>
        )
      })
    }
  }

  render() {
    return (
      <div className="workout-list-parent">
        <h2 className="ui center aligned icon header medium">
          <i className="circular green eye dropper icon dropper-icon" />
          Your Workouts
          {this.renderCreate()}
          {this.renderSignedInMessage()}
          {this.renderSignedOutMessage()}
        </h2>

        <div className="ui stackable four column grid">
          {this.renderList()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    workouts: Object.values(state.workouts),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
}

export default connect(
  mapStateToProps,
  {fetchWorkouts}
)(WorkoutList);
