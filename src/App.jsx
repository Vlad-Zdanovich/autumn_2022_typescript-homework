import { ErrorBoundary } from './shared/components/error-boundary'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Characters } from './shared/pages'
import { StoreProvider } from './shared/store'

export function App() {
  return (
    <ErrorBoundary>
      <StoreProvider>
        <Router>
          <Switch>
            <Route path={['', '/characters']}>
              <Characters />
            </Route>
          </Switch>
        </Router>
      </StoreProvider>
    </ErrorBoundary>
  )
}
