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



function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <PageContent>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/shop">
              <ShopPage />
            </Route>
            <Route path="/product/:productId">
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
            <Route path="/signup">
              <SignUpPage />
            </Route>
          </Switch>
        </PageContent>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

