import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import ShopPage from "./pages/ShopPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import AuthPage from "./pages/AuthPage";
import CartPage from "./pages/CartPage";
import AdminCategoryPage from "./pages/admin/categories/AdminCategoryPage";
import AdminCreateCategoryPage from "./pages/admin/categories/AdminCreateCategoryPage";
import AdminUpdateCategoryPage from "./pages/admin/categories/AdminUpdateCategoryPage";
import AdminUserPage from "./pages/admin/users/AdminUserPage";
import AdminProductPage from "./pages/admin/products/AdminProductPage";
import AdminCreateProductPage from "./pages/admin/products/AdminCreateProductPage";
import AdminUpdateProductPage from "./pages/admin/products/AdminUpdateProductPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/admin/*">
        <Route path="users" element={<AdminUserPage />} />
        <Route path="categories" element={<AdminCategoryPage />} />
        <Route path="categories/create" element={<AdminCreateCategoryPage />} />
        <Route
          path="categories/update/:id"
          element={<AdminUpdateCategoryPage />}
        />
        <Route path="products" element={<AdminProductPage />} />
        <Route path="products/create" element={<AdminCreateProductPage />} />
        <Route path="products/update/:id" element={<AdminUpdateProductPage />} />
      </Route>
    </Routes>
  );
}

export default App;
