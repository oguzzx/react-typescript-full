import CampaignSingle from "../components/campaignSingle/CampaignSingle"
import Categories from "../components/categories/Categories"
import Products from "../components/products/Products"

function ShopPage() {
  return (
    <div>
      <Categories />
      <Products />
      <CampaignSingle />
      <Products />
    </div>
  )
}

export default ShopPage
