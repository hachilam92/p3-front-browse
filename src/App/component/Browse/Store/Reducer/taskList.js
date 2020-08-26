import * as ActionTypes from '../Action/ActionType';

function taskList(state = [], action) {
  switch(action.type) {
    case ActionTypes.INITIALIZE:
      return action.dataArray;
    default:
      return state;
  }
}

export default taskList;