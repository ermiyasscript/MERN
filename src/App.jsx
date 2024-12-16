
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/Home";
import Profile from "./pages/Profile"
import About from "./pages/About";
import Header from "./Components/Header";
export default function App() {
  return (
  <BrowserRouter>
  <Header />
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/signin" element={<SignIn />} />
  <Route path="/signup" element={<SignUp />} />
  <Route path="/about" element={<About />} />
  <Route path="/profile" element={<Profile />} />
  </Routes>
  </BrowserRouter>
  )
}
