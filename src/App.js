import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
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
      <Drawer />
      
      <BrowserRouter>
        <Switch>
          <Route exact from="/" render={props => <Home {...props} />} />
          <Route exact path="/January" render={props => <January {...props} />} />
          <Route exact path="/February" render={props => <February {...props} />} />
          <Route exact path="/March" render={props => <March {...props} />} />
          <Route exact path="/April" render={props => <April {...props} />} />
          <Route exact path="/May" render={props => <May {...props} />} />
          <Route exact path="/June" render={props => <June {...props} />} />
          <Route exact path="/July" render={props => <July {...props} />} />
          <Route exact path="/August" render={props => <August {...props} />} />
          <Route exact path="/September" render={props => <September {...props} />} />
          <Route exact path="/October" render={props => <October {...props} />} />
          <Route exact path="/November" render={props => <November {...props} />} />
          <Route exact path="/December" render={props => <December {...props} />} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
