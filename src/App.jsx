import AdminLogin from "./Components/AdminLogin";
import LandingPage from "./Components/LandingPage";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import UserLogin from "./Components/UserLogin";
import AdminSignUp from "./Components/AdminSignUp";
import AdminHomePage from "./Components/AdminHomePage";
import Error from "./Components/ErrorPage1";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<LandingPage/>} />
     <Route path="/*" element={<Error/>}/>
     <Route path="/admin" element={<AdminLogin/>}/>
     <Route path="/user" element={<UserLogin/>}/>
     <Route path="/adminsignup" element={<AdminSignUp/>}/>
     <Route path="/adminhomepage/*" element={<AdminHomePage/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}


export default App;
