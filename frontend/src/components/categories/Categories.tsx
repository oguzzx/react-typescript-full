import CategoriItem from "./CategoriItem";
import "./categories.css";

function Categories() {
  return (
    <section className="categories">
      <div className="container">
        <div className="section-title  flex flex-col items-center justify-center">
          <h2 className="font-bold text-black text-3xl">All Categories</h2>
          <p className="text-black">Summer Collection New Morden Design</p>
        </div>
        <ul className="category-list">
          <CategoriItem
            img={"img/categories/categories1.png"}
            name="kategori 1"
          />
          <CategoriItem
            img={"img/categories/categories2.png"}
            name="kategori 2"
          />
          <CategoriItem
            img={"img/categories/categories3.png"}
            name="kategori 3"
          />
        </ul>
      </div>
    </section>
  );
}

export default Categories;
