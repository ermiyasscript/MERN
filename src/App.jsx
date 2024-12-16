
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn";
import { BrowserRouter,Routes ,Route } from 'react-router-dom';
import Home from "./pages/Home";
import Profile from "./pages/Profile"
import About from "./pages/About";
export default function App() {
  return (
  <BrowserRouter>
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
