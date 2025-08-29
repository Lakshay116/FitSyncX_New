import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import VDO from "./images/login.mp4"
import UserDashboard from './After_Login/userDashboard';
import Admin from './Admin_Component/before_login';
import AdminLogin from './Admin_Component/Admin_Login';
import AdminDashboard from './Admin_Component/Admin';
import Loading from './components/Loading';








function App() {
  return (
    <Loading>
      <div className="App">
        <video style={{ width: '100vw' }} className='videoTag' autoPlay loop muted>
          <source src={VDO} type='video/mp4' />
        </video>
        <Router>
          {/* <Navbar /> */}

          <Routes>
            <Route exact path="/" element={<LandingPage key='general' />}></Route>
            <Route exact path="/contact" element={<Contact key='contact' />}></Route>
            <Route exact path="/pricing" element={<Pricing key='pricing' />}></Route>
            <Route exact path="/login" element={<Login key='login' />}></Route>
            <Route exact path="/signup" element={<Signup key='login' />}></Route>
            <Route exact path="/user" element={<UserDashboard key='userdb' />}></Route>
            <Route exact path="/admin" element={<Admin key='admin' />}></Route>
            <Route exact path="/admin/login" element={<AdminLogin key='adminlgn' />}></Route>
            <Route exact path="/admin/user" element={<AdminDashboard key='admindb' />}></Route>
          </Routes>
          {/* <Footer /> */}
        </Router>
      </div>
    </Loading>
  );
}

export default App;
