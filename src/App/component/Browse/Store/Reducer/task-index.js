import * as ActionTypes from '../Action/ActionType';

function taskIndex(state = null, action) {
  switch(action.type) {
    case ActionTypes.SELECT:
      console.log(action.index);
      return action.index;
    default:
      return state;
  }
}

export default taskIndex;