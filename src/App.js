import './App.css';


import TodoList from './components/TodoList'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './components/pages/Home';
import Navbar from './components/Layout/Navbar';






function App() {

  
  return (

    <>
        <Router>
    <div>
    <Navbar/>
      
      
<br></br>
<br></br>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/">
          <Home />
        </Route>

        
      </Switch>
    </div>
  </Router>





    

 
  


  </>

  );
}

export default App;
