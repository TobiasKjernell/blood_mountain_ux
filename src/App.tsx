import { Route, Routes } from 'react-router'
import Layout from './pages/Layout'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import Team from './pages/Team'
import About from './pages/About'

function App() {


  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<ErrorPage />} path='*' />
          <Route element={<Home />} path='/' />
          <Route element={<Team />} path='/team' />
          <Route element={<About />} path='/about' />
        </Route>
      </Routes>
    </>
  )
}

export default App
