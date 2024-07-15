
import { Route, Routes } from 'react-router-dom'
import '../src/App.css'
 import AllPage from './routes/allPaage/AllPage'
import Korzinka from './routes/korzinka/Korzinka'
import Login from './routes/login/Login'
import Register from './routes/register/Register'
import SinglePage from './routes/singlapage/SinglePage'

function App() {

  return (
    <>
  <Routes>
    <Route path="/"element={<Register/>}/>
    <Route path="/login"element={<Login/>}/>
    <Route path="/allpage"element={<AllPage/>}/>
    <Route path="/korzinka"element={<Korzinka/>}/>
<Route path='/single/:id'element={<SinglePage/>}/>
  </Routes>
    </>
  )
}

export default App
