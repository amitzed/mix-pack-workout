import _ from 'lodash';

import {
  CREATE_WORKOUT,
  FETCH_WORKOUTS,
  FETCH_WORKOUT,
  DELETE_WORKOUT,
  EDIT_WORKOUT
} from '../actions/types';

export default (state = {}, action) => {
  switch(action.type) {
    case FETCH_WORKOUTS:
      return {...state, ..._.mapKeys(action.payload, 'id')}
    case FETCH_WORKOUT :
      return {...state, [action.payload.id] : action.payload}
    case CREATE_WORKOUT:
      return {...state, [action.payload.id]: action.payload}
    case EDIT_WORKOUT:
      return {...state, [action.payload.id]: action.payload}
    case DELETE_WORKOUT:
      return _.omit(state, action.payload)
    default:
      return state;
  }
}
