import { BrowserRouter, Navigate, Route, Routes, useParams } from 'react-router-dom';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import { CartProvider } from './lib/cart';
import { getCategory } from './lib/data';
import About from './pages/About';
import CategoryPage from './pages/CategoryPage';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import Restaurant from './pages/Restaurant';
import Shop from './pages/Shop';

const SHOP_SLUGS = ['restaurant-items', 'tandoor', 'specials-rolls', 'sauce', 'drinks', 'chaat-snacks'];

function ShopCategoryRoute() {
  const { slug } = useParams();
  if (!slug || !SHOP_SLUGS.includes(slug) || !getCategory(slug)) {
    return <Navigate to="/shop" replace />;
  }
  return <CategoryPage slug={slug} />;
}

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ScrollToTop />
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/shop/:slug" element={<ShopCategoryRoute />} />
              <Route path="/bakery" element={<CategoryPage slug="bakery" />} />
              <Route path="/sweets" element={<CategoryPage slug="sweets" />} />
              <Route path="/cakes" element={<CategoryPage slug="cakes" />} />
              <Route path="/restaurant" element={<Restaurant />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
          <CartDrawer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}
