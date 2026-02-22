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

/* Global fade-in observer: adds 'visible' class to any .fade-in element on scroll */
const useFadeInObserver = () => {
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all current .fade-in elements
    const observe = () => {
      document.querySelectorAll('.fade-in:not(.visible)').forEach((el) => {
        observer.observe(el);
      });
    };

    observe();

    // Re-observe after route changes (MutationObserver watches for new .fade-in elements)
    const mutation = new MutationObserver(() => observe());
    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutation.disconnect();
    };
  }, []);
};

const App: React.FC = () => {
  useFadeInObserver();

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