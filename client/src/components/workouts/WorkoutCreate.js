import React from 'react';
import { Field, reduxForm } from 'redux-form';

class WorkoutCreate extends React.Component {
  renderInput({ input, label }) {
    return (
      <div>
        <input {...input} placeholder={label} />

      </div>
    )
  }

  render() {
    console.log(this.props);
    return (
      <div className="ui inverted segment">
        <h2 class="ui center aligned icon header">
          <i class="circular green flask icon"></i>
          Enter Workout Details
        </h2>
        <form className="ui inverted form large">
          <div className="fields ui one column center aligned grid">
            <div className="five wide field">
              <Field
                name="day"
                component={this.renderInput}
                label="Day"
              />
            </div>
          </div>

          <div className="fields ui one column center aligned grid">
            <div className="four wide field">
              <Field
                name="exercise1Title"
                component={this.renderInput}
                label="Exercise 1"
              />
            </div>
          </div>

            <div className="two fields ui column center aligned grid">
              <div className="four wide field">
                <Field
                  name="exercise1Sets"
                  component={this.renderInput}
                  label="Sets"
                />
              </div>
              <div className="four wide field">
                <Field
                  name="exercise1Reps"
                  component={this.renderInput}
                  label="Reps"
                />
              </div>
            </div>

          <div className="fields ui one column center aligned grid">
            <div className="four wide field">
              <Field
                name="exercise2Title"
                component={this.renderInput}
                label="Exercise 2"
              />
            </div>
          </div>

            <div className="two fields ui column center aligned grid">
              <div className="four wide field">
                <Field
                  name="exercise2Sets"
                  component={this.renderInput}
                  label="Sets"
                />
              </div>
              <div className="four wide field">
                <Field
                  name="exercise2Reps"
                  component={this.renderInput}
                  label="Reps"
                />
              </div>
            </div>

          <div className="fields ui one column center aligned grid">
            <div className="four wide field">
              <Field
                name="exercise3Title"
                component={this.renderInput}
                label="Exercise 3"
              />
            </div>
          </div>

            <div className="two fields ui column center aligned grid">
              <div className="four wide field">
                <Field
                  name="exercise3Sets"
                  component={this.renderInput}
                  label="Sets"
                />
              </div>
              <div className="four wide field">
                <Field
                  name="exercise3Reps"
                  component={this.renderInput}
                  label="Reps"
                />
              </div>
            </div>

          <div className="fields ui one column center aligned grid">
            <div className="four wide field">
              <Field
                name="cardioType"
                component={this.renderInput}
                label="Cardio Type"
              />
            </div>
          </div>

          <div className="fields ui one column center aligned grid">
            <div className="three wide field">
              <Field
                name="cardioTime"
                component={this.renderInput}
                label="Cardio Time"
              />
            </div>
          </div>

        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'workoutCreate'
}) (WorkoutCreate);
