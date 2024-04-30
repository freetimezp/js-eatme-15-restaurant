import './App.css';

import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Collection from './components/Collection/Collection';
import Cities from './components/Cities/Cities';
import CTA from './components/CTA/CTA';

function App() {
  return (
    <div>
      <Header />
      <Card />
      <Collection />
      <Cities />
      <CTA />
    </div>
  );
}

export default App;
