import { useState } from "react";
import '../Styles/AdminSignUp.css'
import axios from 'axios';
const AdminSignUp = () => {
    let [name,setname] = useState("")
    let [email,setemail] = useState("")
    let [password,setpassword] = useState("")
    let [phone,setphone] = useState("")
    let [profile,setprofile] = useState("")

    let admins = {name,email,password,phone,profile}
    let addAdmin = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:1000/Manager',admins)
        .then((res)=>{
            alert("Admin added successfully")
        })
        .catch((err)=>{
            alert("Invalid Data")
        })
        
    }
    return (  
        <div id="adminsignup">
        <form onSubmit={addAdmin}>
        <label>
        Admin Name: 
        <input required type="text" value={name} onChange={(e)=>{setname(e.target.value)}} placeholder="Enter the Admin's Name" />
        </label>
        <br/>
        <label>
            Email: <input required type="email" value={email} onChange={(e)=>{setemail(e.target.value)}} placeholder="Enter the Admin's Email"  />
        </label>
        <br/>
        <label>
        Phone : <input required type="tel" value={phone} onChange={(e)=>{setphone(e.target.value)}} placeholder="Enter the Phone" pattern="[0-9]{10}" />
        </label>
        <br/>
        <label>
        Paswword : <input required type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} placeholder="Enter the Password"/>
        </label>
        <br/>
        <label> 
        ProfileImgUrl :
        <input required type="text" value={profile} onChange={(e)=>{setprofile(e.target.value)}}  placeholder="Enter the Image Address" />
        </label>
        <br/>
        <button>Register</button>
        </form>
        </div>
    );
}
 
export default AdminSignUp;


// fetch("http://localhost:1000/Manager",{
//             method: "POST",
//             headers : {"Content-Type": "application/json"},
//             body : JSON.stringify(admins)
//         })
//         .then((res)=>{
//             console.log(res);
//             alert("Admin added successfully")
//         })
//         .catch((err)=>{
//             alert("Invalid Data" )
//         })