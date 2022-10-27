import './App.css';
import Header from './components/header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Vision from './components/vision';
import Contact from './components/contact';
import Team from './components/team';
import Legalhelp from './components/legalhelp';
import Home from './components/home';

function App() {
  return (
  <>
      <Header/>
      <Home/>
      <Legalhelp/>
      <Vision/>
      <Team/>
      <Contact/>
  </>
  );
}

export default App;
