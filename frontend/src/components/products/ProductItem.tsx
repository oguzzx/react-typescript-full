import { Eye, Heart, Share, ShoppingBasket } from "lucide-react";

function ProductItem() {
  return (
    <div className="product-item glide__slide glide__slide--active">
      <div className="product-image">
        <a href="#">
          <img
            src="img/products/product1/1.png"
            alt="resim1"
            className="img1 w-32"
          />
          <img
            src="img/products/product1/2.png"
            alt="resim2"
            className="img2 w-32"
          />
        </a>
      </div>
      <div className="product-info">
        <a href="$" className="product-title">
          {/* {product.name} */}
        </a>
        <ul className="product-star">
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-half"></i>
          </li>
        </ul>
        <div className="product-prices">
          <strong className="new-price">$20</strong>
          <span className="old-price">$30</span>
        </div>
        <span className="product-discount">-10%</span>
        <div className="product-links">
          <button
            className="add-to-cart"

            // disabled={filteredCart ? true : false}
          >
            <i className="bi bi-basket-fill">
              <ShoppingBasket />
            </i>
          </button>
          <button>
            <i className="bi bi-heart-fill">
              <Heart />
            </i>
          </button>
          <a
            href="/"
            // onClick={() => setActiveImg(product.img)}
            className="product-link"
          >
            <i className="bi bi-eye-fill">
              <Eye />
            </i>
          </a>
          <a href="#">
            <i className="bi bi-share-fill">
              <Share />
            </i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
