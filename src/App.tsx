import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import SignIn from './SignIn';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;