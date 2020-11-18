import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from './Home'
import January from './January'
import February from './February'
import March from './March'

export default function App() {
  return (
    <>
      {/* <Drawer /> */}
      <BrowserRouter>
        <Switch>
          <Route exact from="/" render={props => <Home {...props} />} />
          <Route exact path="/January" render={props => <January {...props} />} />
          <Route exact path="/February" render={props => <February {...props} />} />
          <Route exact path="/March" render={props => <March {...props} />} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

// export default App;
