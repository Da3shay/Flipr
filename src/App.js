import Home from './Home';
import Admin from './Admin';
import { BrowserRouter as Router, Routes , Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
     
      {/* 👇️ Wrap your Route components in a Routes component */}
      <Routes>
        <Route path="/Admin" element={<Admin/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
