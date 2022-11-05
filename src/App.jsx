import { ErrorBoundary } from './shared/components/error-boundary'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Characters } from './shared/pages'

export function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Switch>
          <Route path={['', '/characters']}>
            <Characters />
          </Route>
        </Switch>
      </Router>
    </ErrorBoundary>
  )
}
