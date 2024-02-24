import AdminNavbar from "./AdminNavbar";
import { Routes,Route } from "react-router-dom";
import AdminView from "./AdminView";
import AddProduct from "./AddProduct";

const AdminHomePage = () => {
    return ( 
        <div>
        <AdminNavbar/>
        <Routes>
        <Route path='/adminview' element={<AdminView/>}/>
        <Route path="/adminaddproduct" element={<AddProduct/>}/>
        </Routes>
        </div>
     );
}
 
export default AdminHomePage;