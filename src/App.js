import "./defaults.scss";
import { Switch, Route } from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

import HomepageLayout from "./layouts/HomepageLayout";
import AuthLayout from "./layouts/AuthLayout";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <HomepageLayout>
              <Homepage />
            </HomepageLayout>
          )}
        />
        <Route
          path="/register"
          render={() => (
            <AuthLayout>
              <Register />
            </AuthLayout>
          )}
        />
        <Route
          path="/login"
          render={() => (
            <AuthLayout>
              <Login />
            </AuthLayout>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
