import { ErrorBoundary } from './shared/components/error-boundary'

export function App() {
  return (
    <ErrorBoundary>
      <div>Hello!</div>
    </ErrorBoundary>
  )
}
