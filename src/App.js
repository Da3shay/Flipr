import Home from './Admin_Pages/Home';
import Admin from './Admin_Pages/Admin';
import Profile from './Profile';
import Users from './Admin_Pages/Users';
import Single from './Single';
import Newuser from './Admin_Pages/Newuser';
import Employeedashboard from './Employee_Pages/Employeedashboard';
import Alltask from './Employee_Pages/Alltask'
import Employeetask from './Employee_Pages/Employeetask'
import { BrowserRouter as Router, Routes , Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
     
      {/* 👇️ Wrap your Route components in a Routes component */}
      <Routes>
        <Route path="/admin" element={<Admin/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/Profile" element={<Profile/>} />
        <Route path="/admin/allemployees" element={<Users/>} />
        <Route path="admin/allemployees/viewprofile"  element={<Single/>} />
        <Route path="admin/addemployee" element={<Newuser/>} />
        <Route path="/employee" element={<Employeedashboard/>} />
        <Route path="/employee/tasks" element={<Alltask/>} />
        <Route path="/employee/addtasks" element={<Employeetask/>} />
        



      </Routes>
    </div>
  </Router>
  );
}

export default App;
