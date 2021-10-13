import './App.css';
import Main from './Components/Main';
import NavigationBar from './Components/NavigationBar';
import RForm from './Components/RForm';
import {BrowserRouter as Router , Route, Link,Switch} from 'react-router-dom'
import Shop from './Components/Shop';
import Blogs from './Components/Blogs';

function App() {
  return (
    <Router>
    < div className="bg-light">
    <NavigationBar />
    <Switch>]
    <Route path='/' exact component={Main} />
    <Route path='/shop' exact component={Shop} />
    <Route path='/form' exact component={RForm} />
    <Route path='/blog' exact component={Blogs} />
    </Switch>
    </div>
    </Router>
  );
}

export default App;
