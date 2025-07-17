import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import SignIn from './SignIn';
import BCRegistration from './BCRegistration';
import BCList from './BCList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/bcRegistration" element={<BCRegistration />} />
        <Route path="/bcList" element={<BCList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;