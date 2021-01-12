// import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import LandingPage from './components/landing-page/landingPage';
import VotePage from './components/votePage/votePage';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={LandingPage}/>
      <Route exact path='/votes' component={VotePage}/>
    </div>
  );
}

export default App;
