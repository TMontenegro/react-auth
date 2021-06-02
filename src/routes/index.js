import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import ForgotPassword from '../pages/SignedIn/Authenticate/ForgotPassword'
import SignIn from '../pages/SignedIn/Authenticate/SignIn'
import SignOut from '../pages/SignedIn/Authenticate/SignOut'
import LandingPage from '../pages/SignedOff/LandingPage'

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/esqueci-minha-senha" component={ForgotPassword} />
      <Route exact path="/acessar" component={SignIn} />
      <Route exact path="/cadastrar" component={SignOut} />
      <Route exact path="/dashboard" component={Dashboard} />
    </Switch>
  )
}
