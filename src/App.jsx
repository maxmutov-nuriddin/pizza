import { BrowserRouter, Route, Routes } from 'react-router-dom'


import HomePage from './pages/HomePage'


import './App.css'
import Layout from './components/layout'
import { AppContextProvider } from './contexts/AppContext'
import SeelPage from './pages/SeelPage'

function App() {

  return (
    <>
      <AppContextProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path='/' element={<HomePage />} />
              <Route path='/sell' element={<SeelPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppContextProvider>
    </>
  )
}

export default App
