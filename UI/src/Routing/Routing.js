import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../Components/Dashboard'
import NotFound from '../Components/CommonComponents/404'
import ListPhoto from "../Components/Photos/ListPhoto";

const Routing = () => {
    return (
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/photos/:id" component={ListPhoto} />
        <Route component={NotFound} />
      </Switch>
    )
  }

export default Routing