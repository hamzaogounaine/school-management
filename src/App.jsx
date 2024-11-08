
  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './Navbar';
  
  function App() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<h1>Home</h1>} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/contact" element={<h1>Contact</h1>} />
        </Routes>
      </Router>
    );
  }
  
  export default App;
  
