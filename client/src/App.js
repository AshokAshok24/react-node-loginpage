import Home from './components/Home';
import './App.css';

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Loginpage from './components/Loginpage';
import ProductedRoute from './components/ProductedRoute';
import AuthProvider, { useAuth } from './components/utils/AuthProvider';
import Welcome from './components/Welcome';

function App() {

  const auth = useAuth();
  console.log("auth", auth)
  return (
    <>

      <div className='App'>

        <Router>
          <AuthProvider>

            <Routes>

              <Route path='/login' element={<Loginpage />} />

              <Route element={<ProductedRoute />}>

                <Route path='/home' element={<Home />} />

                <Route path='/welcome' element={<Welcome />} />

              </Route>

              {/* To Render Single Router Path */}

              <Route path="*" element={<Navigate to={auth && auth.user ? '/home' : '/login'} />} />

            </Routes>

          </AuthProvider>
        </Router>


      </div>
    </>

  );
}

export default App;
