import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import InfoIcon from '@material-ui/icons/Info';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import './ProductListing.css'
const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="card">
    
    <div className="more">
    <div className="card-hori"><MoreHorizIcon/></div>
    <div className="card-hover">
        <div className="card-details"> <span className="details-text"><InfoIcon/> Product Details</span>  </div>
        <div className="card-details"> <span className="details-text"><FavoriteIcon/> Add to Whitelist</span> </div>  
        <div className="card-details"> <span className="details-text"><ReportProblemIcon/> Report This</span>  </div>
    </div>
    </div>
    
          <div className="card-img">
<img  src={image} alt="wait.." />
          <div className="title">
             <h4 className="title-text">{title}</h4>
          </div>
    
<div className="descrip">
    <span>{category}</span>
</div>
<div className="card-footer">
<div className="price-sec">
<button className="price">{price}$</button>

</div>
<div className="order-sec">
<Link to={`/product/${id}`}>  <button className="order">Order Now</button> </Link>  

</div>
</div>
    
          </div>
        </div>
    );
  });
  return <>{renderList}</>;
};
export default ProductComponent;
