import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import './App.css';
import UserList from './UserList';
import Details from './Details';


function App() {
  return (
    <Router>
    <div className="App">
    </div>
    <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/:id" element={<Details />}/>
    </Routes>
    </Router>
  );
}


export default App;
