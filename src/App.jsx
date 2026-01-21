import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './layout/Header';
import PageContent from './layout/PageContent';
import Footer from './layout/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ContactPage from './pages/ContactPage';
import TeamPage from './pages/TeamPage';
import AboutPage from './pages/AboutPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import CreateOrderPage from './pages/CreateOrderPage';





import { useDispatch } from 'react-redux';
import { verifyToken } from './store/actions/clientActions';
import { fetchCategories } from './store/actions/globalActions';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(verifyToken());
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <PageContent>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/shop">
              <ShopPage />
            </Route>
            <Route exact path="/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId">
              <ProductDetailPage />
            </Route>
            <Route exact path="/shop/:gender/:categoryName/:categoryId">
              <ShopPage />
            </Route>
            <Route exact path="/product/:productId">
              <ProductDetailPage />
            </Route>
            <Route path="/contact">
              <ContactPage />
            </Route>
            <Route path="/team">
              <TeamPage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/signup">
              <SignUpPage />
            </Route>
            <Route path="/cart">
              <ShoppingCartPage />
            </Route>
            <Route path="/order">
              <CreateOrderPage />
            </Route>
          </Switch>
        </PageContent>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

