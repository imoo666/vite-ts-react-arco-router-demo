import '@arco-design/web-react/dist/css/arco.css'
import { HashRouter } from 'react-router-dom'
import { renderRoutes, routesConfig } from './constants/router'
import { AppContext } from './stores/useAppContext'

function App() {
  return (
    <div className="h-full">
      <AppContext.Provider value={{}}>
        <HashRouter basename="/">{renderRoutes(routesConfig)}</HashRouter>
      </AppContext.Provider>
    </div>
  )
}

export default App
