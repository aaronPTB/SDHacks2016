import React from 'react'
import { Route, IndexRoute } from 'react-router'

const routes = {
  <Route path="/" component={Layout}>
      <IndexRoute component={IndexPage}/>
      <Route path="athlete/:id" component={AthletePage}/>
      <Route path="*" component={NotFoundPage}/>
  </Route>
};

export default routes;
