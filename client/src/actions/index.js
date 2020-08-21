import workouts from '../apis/workouts';
import { SIGN_IN, SIGN_OUT } from './types';

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

export const createWorkout = (formValues) => async (dispatch) => {
  workouts.post('/workouts', formValues)
}
