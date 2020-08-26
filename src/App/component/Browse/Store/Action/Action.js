import * as ActionTypes from '../Action/ActionType';

export const initialize = (dataArray) => ({
  type: ActionTypes.INITIALIZE,
  dataArray
});

export const select = (index) => ({
  type: ActionTypes.SELECT,
  index
});
