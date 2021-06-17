import { render } from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import reportWebVitals from "./reportWebVitals";
import { Listings, Home, Listing, NotFound, User, Host, Login } from "./sections/index";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Viewer } from './lib/types'
import './styles/tailwind.css';
import { useState } from "react";

const client = new ApolloClient({
  uri: "http://localhost:9000/api",
});

const initialViewer: Viewer = {
    id:  null,
    avatar:  null,
    token:  null,
    hasWallet:  null,
    didRequest: false
}

const App = () => {
  const [viewer, setViewer] = useState<Viewer>(initialViewer)
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/host" component={Host} />
        <Route exact path="/club/:id" component={Listing} />
        <Route exact path="/clubs/:location?" component={Listings} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/user/:id" component={User} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

render(
  <ApolloProvider client={client} >
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
