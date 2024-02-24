import { useState } from 'react';
import '../Styles/AddProducts.css'
import axios from 'axios';
const AddProduct = () => {
    let [category, setcategory] = useState("")
    let [restaurant, setrestaurant] = useState("")
    let [name, setname] = useState("")
    let [price, setprice] = useState("")
    let [Ratings, setrating] = useState("")
    let [Quantity, setquantity] = useState("")
    let [Description, setdescription] = useState("")
    let [thumbnailUrl, setthumbnailUrl] = useState("")

    let data = {category,name,price,restaurant,Ratings,Description,Quantity,thumbnailUrl}

    let addDish = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:1000/Products',data)
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
        <div className="additem">
            <form onSubmit={addDish}>
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
                thumbnailUrl:
                <input required value={thumbnailUrl} onChange={(e) => { setthumbnailUrl(e.target.value) }} type="text" placeholder="Enter the Image URL" />
                <br />
                <label>
                    Ratings :
                    <input required value={Ratings} onChange={(e) => { setrating(e.target.value) }} type="number" />
                </label>
                <br />
                <button>Add Dish</button>
            </form>
        </div>
    );
}

export default AddProduct;