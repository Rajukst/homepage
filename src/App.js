
import './App.css';
import Case from './Component/Case-Studies/Case';
import Contact from './Component/Contact/Contact';
import News from './Component/News/News';
import Partner from './Component/Partner/Partner';
import Services from './Component/Services/Services';
import Solution from './Component/Solution/Solution';
import TopBanner from './Component/Top-Banner/TopBanner';

function App() {
  return (
    <div className="App">
      <TopBanner></TopBanner>
      <Contact></Contact>
      <News></News>
      <Services></Services>
      <Solution></Solution>
      <Case></Case>
      <Partner></Partner>
    </div>
  );
}

export default App;
