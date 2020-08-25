import {combineReducers} from 'redux';

import taskIndex from './task-index';
import taskList from './task-list';

export const rootReducer = combineReducers({taskList, taskIndex});