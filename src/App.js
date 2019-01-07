import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import { Home, SingleQuestion, Login } from './components';

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/question/:id" component={SingleQuestion} />
      <Route exact path="/login" component={Login} />
    </div>
  </BrowserRouter>
);

export default App;
