import * as ActionTypes from '../Action/ActionType';

function taskIndex(state = null, action) {
  switch(action.type) {
    case ActionTypes.SELECT:
      console.log(state);
      return action.index;
    default:
      return state;
  }
}

export default taskIndex;