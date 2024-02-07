import BlogItem from "./BlogItem";
import "./blogs.css";

function Blogs() {
  return (
    <section className="blogs">
      <div className="container">
        <div className="section-title flex flex-col items-center justify-center">
          <h2 className="text-3xl text-black font-bold">From Our Blog</h2>
          <p className="text-black">Summer Collection New Morden Design</p>
        </div>
        <ul className="blog-list">
          <BlogItem />
          <BlogItem />
          <BlogItem />
        </ul>
      </div>
    </section>
  );
}

export default Blogs;
