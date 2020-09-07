import React from 'react';
import { Field, reduxForm } from 'redux-form';

class WorkoutForm extends React.Component {
  renderError({ error, touched }) {
    if(error && touched) {
      return (
        <div className="ui error message">
          <div className="header" style={{textAlign: 'center'}}>{error}</div>
        </div>
      )
    }
  }

  renderInput = ({ input, label, meta }) => {
    const  errorRedField = `field ${meta.error && meta.touched ? 'error' : ''}`;

    return (
      <div className={errorRedField}>
        <input
          {...input}
          placeholder={label}
          style={{textAlign: 'center'}}
          autoComplete="off"
        />
      {this.renderError(meta)}
      </div>
    )
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues)
  }

  render() {
    return (
      <div className="ui inverted segment">
        <h2 className="ui center aligned icon header">
          <i className="circular green flask icon"></i>
          Enter Workout Details
        </h2>

        <form
          className="ui inverted form large error form-basic"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <div className="fields ui one column center aligned grid">
            <div className="five wide field">
              <Field
                name="day"
                component={this.renderInput}
                label="Day/Date"
              />
            </div>
          </div>

          <div className="fields ui one column center aligned grid" style={{marginTop: '2.5em'}}>
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

          <div className="fields ui one column center aligned grid" style={{marginTop: '2.5em'}}>
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

          <div className="fields ui one column center aligned grid" style={{marginTop: '2.5em'}}>
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

          <div className="fields ui one column center aligned grid" style={{marginTop: '2.5em'}}>
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

          <div className="button-wrapper">
            <button className="ui inverted green button large">
              <i className="save outline icon"></i>
              Save Workout
            </button>
          </div>

        </form>
      </div>
    );
  }
}

const validate = (formValues) => {
  const errors = {}

  if(!formValues.day) {
    errors.day = 'Day or Date must be entered';
  }
  if(!formValues.exercise1Title) {
    errors.exercise1Title = 'Enter at least one exercise';
  }
  return errors;
}

export default reduxForm({
  form: 'workoutForm',
  validate
}) (WorkoutForm);
