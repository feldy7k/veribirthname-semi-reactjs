import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import BirthCert from './BirthCert';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/birthcert" element={<BirthCert />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;