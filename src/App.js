import './App.css';
import Navbar from './Components/Navbar';
import Tile from "./Components/Tile";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      {/* <Navbar/> */}
      <Router>
        <Navbar title="TextUtils" />
        <div className="container my-3">
          <Switch>
            <Route exact path="/">
            <Tile/>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
