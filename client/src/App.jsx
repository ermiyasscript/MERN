
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/Home";
import Profile from "./pages/Profile"
import About from "./pages/About";
import Header from "./Components/Header";
import PrivateRoute from "./Components/PrivateRoute";
export default function App() {
  return (
  <BrowserRouter>
  <Header />
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/signin" element={<SignIn />} />
  <Route path="/signup" element={<SignUp />} />
  <Route path="/about" element={<About />} />
<Route  element={<PrivateRoute />} >
  <Route path="/profile" element={<Profile />} />
</Route>
  </Routes>
  </BrowserRouter>
  )
}
