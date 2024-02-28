import { useState } from 'react';
import '../Styles/Edit.css';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const EditProducts = ({item}) => {
    let [category, setcategory] = useState("")
    let [restaurant, setrestaurant] = useState("")
    let [name, setname] = useState("")
    let [price, setprice] = useState("")
    let [Ratings, setrating] = useState("")
    let [Quantity, setquantity] = useState("")
    let [Description, setdescription] = useState("")
    let [thumbnailUrl, setthumbnailUrl] = useState("")
    let data = {category,name,price,restaurant,Ratings,Description,Quantity,thumbnailUrl};
    useEffect(()=>{
        setcategory(item.category);
        setdescription(item.Description);
        setname(item.name);
        setprice(item.price);
        setquantity(item.Quantity);
        setrestaurant(item.restaurant)
        setrating(item.Ratings);
        setthumbnailUrl(item.thumbnailUrl);
    },[])

    let editproduct = (e) =>{
        e.preventDefault();
        axios.put(`http://localhost:1000/Products/${item.id}`,data)
        .then((res)=>{
            console.log(res);
            alert("Dish added successfully")  
        })
        .catch((err)=>{
            console.log(err);
            alert("Error adding dish ")
        })  
    }

    return (
        <div className="editproduct">
         <span  id="x">X</span>
        <form  onSubmit={editproduct}>

                <label>
                    Category:
                    <select required value={category} onChange={(e) => { setcategory(e.target.value) }}>
                        <option >Starters</option>
                        <option >Veg</option>
                        <option >Non - Veg</option>
                        <option >Sea Food</option>
                        <option >Breads</option>
                        <option >Chinese</option>
                        <option >Beverages</option>
                        <option >Desserts</option>
                    </select>
                </label>
                <br />
                <label>
                    Restaurant Name:
                    <input required value={restaurant} onChange={(e) => { setrestaurant(e.target.value) }} type="text" placeholder="Enter the Restaurant Name" />
                </label>
                <br />
                <label>
                    Dish Name:
                    <input required value={name} onChange={(e) => { setname(e.target.value) }} type="text" placeholder="Enter the Dish Name" />
                </label>
                <br />
                <label>
                    Price :
                    <input required value={price} onChange={(e) => { setprice(e.target.value) }} type="text" placeholder="Enter the Cost Price" />
                </label>
                <br />
                <label>
                    Quantity:
                    <input required value={Quantity} onChange={(e) => { setquantity(e.target.value) }} type="number" />
                </label>
                <br />
                <label>
                    Description:
                    <textarea required value={Description} onChange={(e) => { setdescription(e.target.value) }} cols="30" placeholder="Enter the Special Recipies" rows="2"></textarea>
                </label>
                <br />
              <label htmlFor="">  thumbnailUrl:
                <input required value={thumbnailUrl} onChange={(e) => { setthumbnailUrl(e.target.value) }} type="text" placeholder="Enter the Image URL" />
                </label>
                <br />
                <label>
                    Ratings :
                    <input required value={Ratings} onChange={(e) => { setrating(e.target.value) }} type="number" />
                </label>
                <br />
                <button className='btn btn-info'>Edit Dish</button>
            </form>
        </div>
      );
}
 
export default EditProducts;