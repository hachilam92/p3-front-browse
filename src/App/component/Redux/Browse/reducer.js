import * as ActionTypes from './actionType';

const INITIAL_STATE ={
  taskList: [],
  taskIndex: 0, 
};

export default function browse(state = INITIAL_STATE, action) {
  console.log(state);
  switch(action.type) {
    case ActionTypes.INITIALIZE:
      return {
        ...state, 
        taskList: action.payload.taskList, 
      };
    case ActionTypes.SELECT:
      return {
        ...state, 
        taskIndex: action.payload.taskIndex, 
      };
    default:
      return state;
  }
}


