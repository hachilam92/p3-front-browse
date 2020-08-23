import {createStore, combineReducers} from 'redux';

import * as ActionTypes from '../Action/ActionType';

function taskList(state = [], action) {
  switch(action.type) {
    case ActionTypes.INITIALIZE:
      return action.dataArray;
    default:
      return state;
  }
}

function taskIndex(state = null, action) {
  switch(action.type) {
    case ActionTypes.SELECT:
      return action.index;
    default:
      return state;
  }
}

const reducer = combineReducers({taskList, taskIndex});
const store = createStore(reducer);

export default store;
