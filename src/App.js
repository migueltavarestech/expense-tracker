import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom"
import Home from './Home'
import Drawer from './Drawer'
import January from './January'
import February from './February'
import March from './March'
import April from './April'
import May from './May'
import June from './June'
import July from './July'
import August from './August'
import September from './September'
import October from './October'
import November from './November'
import December from './December'

export default function App() {
  return (
    <>
      
      
      <HashRouter>
        <Drawer />
        <Switch>
          <Route exact path="/" render={props => <Home {...props} />} />
          <Route path="/January" exact render={props => <January {...props} />} />
          <Route path="/February" exact render={props => <February {...props} />} />
          <Route path="/March" exact render={props => <March {...props} />} />
          <Route path="/April" exact render={props => <April {...props} />} />
          <Route path="/May" exact render={props => <May {...props} />} />
          <Route path="/June" exact render={props => <June {...props} />} />
          <Route path="/July" exact render={props => <July {...props} />} />
          <Route path="/August" exact render={props => <August {...props} />} />
          <Route path="/September" exact render={props => <September {...props} />} />
          <Route path="/October" exact render={props => <October {...props} />} />
          <Route path="/November" exact render={props => <November {...props} />} />
          <Route path="/December" exact render={props => <December {...props} />} />
          <Route component={Home}/>
        </Switch>
      </HashRouter>
    </>
  );
}
