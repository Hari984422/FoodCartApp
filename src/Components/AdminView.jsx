import axios from "axios";
import { useEffect, useState } from "react";
import '../Styles/AdminView.css'
import StarIcon from '@mui/icons-material/Star';

const AdminView = () => {
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
          <img src={x.thumbnailUrl} alt="" />
          <div class="restaurant">
          <h4 >{x.restaurant} ||</h4>
          <b>{x.Ratings} <StarIcon id="star"/> </b>
          </div>
          <h5 class="">{x.name}</h5>

          </div>
        )
      })}
    </div>
  );
}

export default AdminView;