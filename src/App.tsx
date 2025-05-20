import { Route, Routes } from 'react-router'
import Layout from './pages/Layout'
import Home from './pages/Home'

function App() {


  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<Home />} path='/' />
        </Route>
      </Routes>
    </>
  )
}

export default App
