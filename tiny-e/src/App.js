import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import ProductView from './ProductView';
import { 
    Stitch,
    RemoteMongoClient,
    AnonymousCredential
} from 'mongodb-stitch-browser-sdk';

const client = Stitch.initializeDefaultAppClient('tinye-auygs');
const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('tinye');
client.auth.loginWithCredential(new AnonymousCredential());


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact render={routeProps => <Home client={client} db={db} {...routeProps} />} />
            <Route path="/product/:sku" render={routeProps => <ProductView client={client} db={db} {...routeProps} />} />
            {/*<Route component={NoMatch} />*/}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
