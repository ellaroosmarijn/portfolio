import { createRoot } from 'react-dom/client'
import { Provider as ReduxProvider } from 'react-redux'
import store from './store'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  )
})
