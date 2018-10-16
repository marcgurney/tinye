import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import { 
    Stitch,
    RemoteMongoClient,
    AnonymousCredential
} from 'mongodb-stitch-browser-sdk';

const client = Stitch.initializeDefaultAppClient('tinye-auygs');

const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('tinye');

client.auth.loginWithCredential(new AnonymousCredential()).then(user => 
  db.collection('products').updateOne({owner_id: client.auth.user.id}, {$set:{number:42}}, {upsert:true})
).then(() => 
  db.collection('products').find({owner_id: client.auth.user.id}, { limit: 100}).asArray()
).then(docs => {
    console.log("Found docs", docs)
    console.log("[MongoDB Stitch] Connected to Stitch")
}).catch(err => {
    console.error(err)
});


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            {/*<Redirect from="/old-match" to="/will-match" />
            <Route path="/will-match" component={WillMatch} />
            <Route component={NoMatch} />*/}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
