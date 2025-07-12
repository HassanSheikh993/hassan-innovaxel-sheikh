import './App.css';
import { Home } from './components/home';
import { AllUrls } from './components/allUrls';
import { Update } from './components/update';
import { Statistics } from './components/stats';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: '10px', borderBottom: '1px solid black' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/all" style={{ marginRight: '10px' }}>All URLs</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<AllUrls />} />
        <Route path='/update' element={<Update/>} />
        <Route path='/stats' element={<Statistics/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
