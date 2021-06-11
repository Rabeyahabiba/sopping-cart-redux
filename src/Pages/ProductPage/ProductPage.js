import React, { useState, useEffect } from "react";
import "./ProductPage.css";
import { Link, useHistory, useParams } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CircularProgress from "@material-ui/core/CircularProgress";

function ProductPage() {
  let history = useHistory();
  const { id } = useParams();
  const [productInfo, setProductInfo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProductInfo(data);
        setLoading(false);
      });
  }, []);

  let handleCart = () => {
    toast.success("Great! Ordered Successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setTimeout(() => {
      history.push("/");
    }, 3000);
  };

  function productInfojsx() {
    return (
      <>
        <div className=" img-sec col-md-6 col-lg-5 col-sm-12">
          <div className="back">
            <Link to="/" className="backto">
              <ArrowBackIosIcon /> BACK TO HOME
            </Link>
          </div>

          <img className="img-flu" src={productInfo.image} alt="product" />
        </div>
        <div className=" info-sec col-md-7 col-lg-7 col-sm-12">
          <p className="detail-title">{productInfo.title}</p>
          <div className="description-star">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarHalfIcon />
            <StarOutlineIcon />
          </div>
          <p className="description-text">{productInfo.description}</p>
          <span className="category">
            Category
            <ArrowRightAltIcon />
          </span>{" "}
          <span className="category-name">{productInfo.category}</span>
          <p className="description-price">
            <sup>$</sup>
            {productInfo.price}
          </p>
          <button onClick={handleCart} className="addToCart">
            <ShoppingCartIcon /> Add to cart{" "}
          </button>
        </div>
      </>
    );
  }

  return (
    <div className="row  container productDetail">
      <div className="row  detail ">
        {loading ? (
          <div className="loadingWrapper">
            <CircularProgress />
          </div>
        ) : (
          productInfojsx()
        )}
      </div>
      <ToastContainer />
    </div>
  );
}

export default ProductPage;
