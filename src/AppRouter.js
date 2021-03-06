/** @jsxImportSource @emotion/react */
import HomePage from "./HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const AppRouter = (props) => {
  return (
    <Router {...props}>
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
