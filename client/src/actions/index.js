import workouts from '../apis/workouts';

import history from '../history';

import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_WORKOUT,
  FETCH_WORKOUTS,
  FETCH_WORKOUT,
  DELETE_WORKOUT,
  EDIT_WORKOUT
} from './types';

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId
  }
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  }
};

// CREATE Workout
export const createWorkout = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth
  const response = await workouts.post('/workouts', {...formValues, userId});

  dispatch({
    type: CREATE_WORKOUT,
    payload: response.data
  });
  history.push('/');
}

// Fetch all workouts
export const fetchWorkouts = () => async (dispatch) => {
  const response = await workouts.get('/workouts');

  dispatch({
    type: FETCH_WORKOUTS,
    payload: response.data
  })
}

// Fetch just ONE workout
export const fetchWorkout = (id) => async (dispatch) => {
  const response = await workouts.get(`/workouts/${id}`);

  dispatch({
    type: FETCH_WORKOUT,
    payload: response.data
  })
}

// EDIT workout
export const editWorkout = (id, formValues) => async (dispatch) => {
  const response = await workouts.patch(`/workouts/${id}`, formValues);

  dispatch({
    type: EDIT_WORKOUT,
    payload: response.data
  });
  history.push('/');
}

// DELETE workout
export const deleteWorkout = (id) => async (dispatch) => {
  await workouts.delete(`/workouts/${id}`);

  dispatch({
    type: DELETE_WORKOUT,
    payload: id
  })
}
