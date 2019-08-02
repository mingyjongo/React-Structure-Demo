import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Blog from './features/blog/root/Blog'

export const Root = () => (
  <Switch>
    <Route path="/" component={Blog} />
  </Switch>
)

export default Root
