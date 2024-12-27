import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Page from './pages/Page';
import Home from './pages/Home';
import Shop from './pages/Shop';

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element = {<Page />}>
            <Route path='/' element ={<Home />}></Route>
            <Route path='/shop' element = {<Shop />}></Route>
          </Route>
          <Route path='*' element={<Navigate to="/" replace />}></Route>
        </Routes>
      </Router>
    </>
  )
}
