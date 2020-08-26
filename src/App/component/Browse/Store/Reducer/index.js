import {combineReducers} from 'redux';

import taskIndex from './taskIndex';
import taskList from './taskList';

export const rootReducer = combineReducers({taskList, taskIndex});