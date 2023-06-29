import './App.css';


import TodoList from './components/TodoList'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';






function App() {
  return (

    <div className='mainstream' >
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/todoList">TodoList</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/todoList">
          <TodoList />
        </Route>
      </Switch>
    </div>
  </Router>




    

 
  


  </div>

  );
}

export default App;
