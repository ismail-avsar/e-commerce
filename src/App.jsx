import { Switch, Route } from 'react-router-dom';
import Header from './layout/Header';
import PageContent from './layout/PageContent';
import Footer from './layout/Footer';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <PageContent>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </PageContent>
      <Footer />
    </div>
  );
}

export default App;