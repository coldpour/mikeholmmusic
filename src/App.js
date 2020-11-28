/** @jsxImportSource @emotion/react */
import HomePage from "./HomePage";
import LinksPage from "./LinksPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/links">
          <LinksPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
