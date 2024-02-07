import Blogs from "../components/blogs/Blogs";
import Brands from "../components/brands/Brands";
import CampaignSingle from "../components/campaignSingle/CampaignSingle";
import Campaigns from "../components/campaigns/Campaigns";
import Categories from "../components/categories/Categories";
import Products from "../components/products/Products";
import Slider from "../components/slider/Slider";

function HomePage() {
  return (
    <div>
      <Slider />
      <Categories />
      <Products />
      <Campaigns />
      <Blogs />
      <Brands />
      <CampaignSingle />
    </div>
  );
}

export default HomePage;
