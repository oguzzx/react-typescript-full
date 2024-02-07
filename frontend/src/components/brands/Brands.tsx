import BrandItem from './BrandItem'
import "./brands.css"

function Brands() {
  return (
    <section className="brands">
      <div className="container">
        <ul className="brand-list">
          <BrandItem />
          <BrandItem />
          <BrandItem />
          <BrandItem />
          <BrandItem />
          <BrandItem />
        </ul>
      </div>
    </section>
  )
}

export default Brands
