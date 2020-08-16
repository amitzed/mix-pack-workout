import React from 'react';
import { Field, reduxForm } from 'redux-form';

class WorkoutCreate extends React.Component {
  renderInput(formProps) {
    return (
      <div>
        <input
          onChange={formProps.input.onChange}
          value={formProps.input.value}
        />
      </div>
    )
  }

  render() {
    console.log(this.props);
    return (
      <form>
        <Field name="day" component={this.renderInput} />
        <Field name="exercise1Title" component={this.renderInput} />
        <Field name="exercise1Sets" component={this.renderInput} />
        <Field name="exercise1Reps" component={this.renderInput} />
        <Field name="exercise2Title" component={this.renderInput} />
        <Field name="exercise2Sets" component={this.renderInput} />
        <Field name="exercise2Reps" component={this.renderInput} />
        <Field name="exercise3Title" component={this.renderInput} />
        <Field name="exercise3Sets" component={this.renderInput} />
        <Field name="exercise3Reps" component={this.renderInput} />
        <Field name="cardioType" component={this.renderInput} />
        <Field name="cardioTime" component={this.renderInput} />
      </form>
    );
  }
}

export default reduxForm({
  form: 'workoutCreate'
}) (WorkoutCreate);
