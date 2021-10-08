import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavFooter from './shared/components/Navigation/NavFooter';
import NavHeader from './shared/components/Navigation/NavHeader';

function App() {
  return (
    <div class="page_wrapper">
        <BrowserRouter>
          <NavHeader />
          <main>
            <Switch>
              <Route path="/"></Route>
              <Route path="/"></Route>
            </Switch>
          </main>
          <NavFooter />
        </BrowserRouter>
    </div>
);
}

export default App;
