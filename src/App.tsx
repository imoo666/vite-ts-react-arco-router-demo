import '@arco-design/web-react/dist/css/arco.css'
import { Home } from './pages/home/Index'
import { Setting } from './pages/setting/Index'
import { AppContext } from './stores/useAppContext'
import { HashRouter, Route, Routes } from 'react-router-dom'

function App() {
  const routers = [
    { path: '/setting', element: <Setting /> },
    { path: '/', element: <Home /> }
  ]

  return (
    <div className="h-full">
      <AppContext.Provider value={{}}>
        <HashRouter basename="/">
          <Routes>
            {routers.map((router) => (
              <Route key={router.path} path={router.path} element={router.element} />
            ))}
          </Routes>
        </HashRouter>
      </AppContext.Provider>
    </div>
  )
}

export default App
