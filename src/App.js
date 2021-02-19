import "./defaults.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

import HomepageLayout from "./layouts/HomepageLayout";
import AuthLayout from "./layouts/AuthLayout";

import WithAuth from "./hoc/withAuth";

import { checkUserSession } from "./redux/User/user.actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <WithAuth>
              <HomepageLayout>
                <Homepage />
              </HomepageLayout>
            </WithAuth>
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
