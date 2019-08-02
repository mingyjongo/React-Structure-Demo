import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Landing from '../landing/Landing'
import Single from '../single/Single'

export const Blog = () => (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/:slug" exact component={Single} />
  </Switch>
)

export default Blog
