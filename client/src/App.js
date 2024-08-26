import Home from './components/Home';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Loginpage from './components/Loginpage';
import ProductedRoute from './components/ProductedRoute';
import AuthProvider from './components/utils/AuthProvider';

function App() {
  return (
    <>

      <div className='App'>

        <Router>
          <AuthProvider>

            <Routes>

              <Route path='/login' element={<Loginpage />} />

              <Route element={<ProductedRoute />}>

                <Route path='/home' element={<Home />} />

              </Route>

            </Routes>

          </AuthProvider>
        </Router>


      </div>
    </>

  );
}

export default App;
