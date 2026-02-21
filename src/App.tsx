import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import './styles/App.css';

const ScrollToTop: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <ScrollProgress />
        <Header />
        <Route component={ScrollToTop} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/programs" component={Programs} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;