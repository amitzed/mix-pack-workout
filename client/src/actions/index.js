import workouts from '../apis/workouts';
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
export const createWorkout = (formValues) => async (dispatch) => {
  const response = await workouts.post('/workouts', formValues);

  dispatch({
    type: CREATE_WORKOUT,
    payload: response.data
  })
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
  const response = await workouts.put(`/workouts/${id}`, formValues);

  dispatch({
    type: EDIT_WORKOUT,
    payload: response.data
  })
}
