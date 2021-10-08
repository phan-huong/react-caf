import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavFooter from './shared/components/Navigation/NavFooter';
import NavHeader from './shared/components/Navigation/NavHeader';
import Services from './services/Services';

function App() {
  return (
    <div class="page_wrapper">
        <BrowserRouter>
          <NavHeader />
          <main>
            <Switch>
              <Route path="/">
                <Services />
              </Route>
              <Route path="/about"></Route>
            </Switch>
          </main>
          <NavFooter />
        </BrowserRouter>
    </div>
);
}

export default App;
