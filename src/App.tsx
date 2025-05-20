import { Route, Routes } from 'react-router'
import Layout from './pages/Layout'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import Team from './pages/Team'
import About from './pages/About'
import Media from './pages/Media'

function App() {


  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<ErrorPage />} path='*' />
          <Route element={<Home />} path='/' />
          <Route element={<Team />} path='/team' />
          <Route element={<About />} path='/about' />
          <Route element={<Media />} path='/media' />
        </Route>
      </Routes>
    </>
  )
}

export default App
