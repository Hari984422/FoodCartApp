import axios from "axios";
import { useEffect, useState } from "react";
import '../Styles/AdminView.css'
import StarIcon from '@mui/icons-material/Star';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EditProducts from "./EditProducts";
const AdminView = () => {
  let [edit,setedit] = useState(null)
  let [data, setdata] = useState([])

  useEffect(() => {
    axios.get('http://localhost:1000/Products')
      .then((res) => {
        console.log(res.data);
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  return (
    <div className="adminviewpage">
      {data.map((x)=>{
        return (
          <div class="displayproducts">
              <div className="image">
              <img src={x.thumbnailUrl} alt="" />
              </div>
            <div className="details">
            <span id="category">{x.category}</span>
              <div class="restaurant">
              <h4 >{x.restaurant} ||</h4>
              <b>{x.Ratings} <StarIcon id="star"/> </b>
              </div>
              <h5>{x.name}</h5>
              <hr />
              <span id="price">MRP:₹{x.price}</span>
            <div className="opt">
            <span>₹{x.price - x.price * 30 / 100}</span>
              <div className="option">
              <EditIcon onClick={()=>{setedit(x)}} />
              <DeleteIcon/>
              </div>
            </div>
            </div>
          </div>
        )
      })}
          {edit && <EditProducts item={edit} />} 

    </div>
  );
}

export default AdminView;