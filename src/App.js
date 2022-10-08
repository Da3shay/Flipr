import Home from './Home';
import Admin from './Admin';
import Profile from './Profile';
import Users from './Users';
import Single from './Single';
import { BrowserRouter as Router, Routes , Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
     
      {/* 👇️ Wrap your Route components in a Routes component */}
      <Routes>
        <Route path="/Admin" element={<Admin/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/Profile" element={<Profile/>} />
        <Route path="/Users" element={<Users/>} />
        <Route path="Viewprofile" element={<Single/>} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
