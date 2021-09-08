import React from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import LoadingPage from "../page-components/LoadingPage";

const ProtectedRoute = ({ component, returnTo, ...args }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: LoadingPage,
      returnTo,
    })}
    {...args}
  />
);

export default ProtectedRoute;