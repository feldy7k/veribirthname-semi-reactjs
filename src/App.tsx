import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import BirthCert from './BirthCert';
import SignIn from './SignIn';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/birthcert" element={<BirthCert />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;