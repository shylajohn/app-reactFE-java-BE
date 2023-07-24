
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListEmployeeComponent from './component/ListEmployeeComponent';
import FooterComponent from './component/FooterComponent';
import HeaderComponent from './component/HeaderComponent';
import AddEmployeeComponent from './component/AddEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className= "container">
          
          <Switch>
              <Route exact path = "/" component = {ListEmployeeComponent}></Route>
              <Route path = "/employees" component = {ListEmployeeComponent}></Route>
              
              <Route path = "/add-employee" component = {AddEmployeeComponent}></Route>
              
           <Route path = "/edit-employee/:id" component = {AddEmployeeComponent}></Route>

            </Switch>
        </div>
        <FooterComponent />
        </Router>
    </div>
  );
}

export default App;
