import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { ErrorBoundary } from './shared/components/error-boundary'
import { Characters } from './shared/pages'
import { StoreProvider } from './shared/store'
import { GlobalLoadingProvider } from './shared/providers/global-loading-provider'
import { LoaderLayout } from './shared/components/loader-layout'
import './shared/scss/index.scss'

export function App() {
  return (
    <GlobalLoadingProvider>
      <LoaderLayout>
        <div className="container">
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
        </div>
      </LoaderLayout>
    </GlobalLoadingProvider>
  )
}
