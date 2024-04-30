import './App.css';

import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Collection from './components/Collection/Collection';
import Cities from './components/Cities/Cities';
import CTA from './components/CTA/CTA';
import AccContainer from './components/AccContainer/AccContainer';


function App() {
  return (
    <div>
      <Header />
      <Card />
      <Collection />
      <Cities />
      <CTA />
      <AccContainer />
    </div>
  );
}

export default App;
