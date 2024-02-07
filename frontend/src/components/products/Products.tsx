import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductItem from "./ProductItem";
import "./products.css";

type NextBtnProps = {
  onClick: () => void;
};

type PrevBtnProps = {
  onClick: () => void;
};

function Products() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 2700,
    autoplay: true,
    nextArrow: <NextBtn onClick={() => {}} />,
    prevArrow: <PrevBtn onClick={() => {}} />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  function NextBtn({ onClick }: NextBtnProps) {
    return (
      <button className="glide__arrow glide__arrow--right" onClick={onClick}>
        <i className="bi bi-chevron-right">
          <ChevronRight />
        </i>
      </button>
    );
  }

  function PrevBtn({ onClick }: PrevBtnProps) {
    return (
      <button className="glide__arrow glide__arrow--left" onClick={onClick}>
        <i className="bi bi-chevron-left">
          <ChevronLeft />
        </i>
      </button>
    );
  }

  return (
    <section className="products">
      <div className="container">
        <div className="section-title flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold text-black">Featured Products</h2>
          <p className="text-black">Summer Collection New Morden Design</p>
        </div>
        <div className="product-wrapper product-carousel">
          <div className="glide__track">
            <Slider {...sliderSettings}>
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
            </Slider>
          </div>
          <div className="glide__arrows"></div>
        </div>
      </div>
    </section>
  );
}

export default Products;
