import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import {Browse} from './component/Browse';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/tasks' component={Browse}></Route>
      </Switch>
    </div>
  );
}

export default App;
