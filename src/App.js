import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProductPage from "./Pages/ProductPage/ProductPage";
import fakeData from "./fakeData.json";
import ProductListing from "./Pages/ProductPage/ProductListing";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <ProductListing></ProductListing>
          </Route>
          <Route path="/product/:id">
            <ProductPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
