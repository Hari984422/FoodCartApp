import { Link } from "react-router-dom";
import '../Styles/LandingPage.css'
const LandingPage = () => {
    return (
        <div className="Landingpage">
            <div className="sub_lp">
                <Link to="/admin">
                    <img id="i1" src="https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png" alt="" />
                    <h3>Admin</h3>
                </Link>
                <Link to="/user">
                    <img id="i2" src="https://png.pngtree.com/png-vector/20191009/ourmid/pngtree-user-icon-png-image_1796659.jpg" alt="" />
                    <h3>User</h3>
                </Link></div>
        </div>
    );
}

export default LandingPage;