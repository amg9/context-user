import React from 'react';
import { Container, } from 'semantic-ui-react';
import { Switch, Route, } from 'react-router-dom';
import Navbar from './components/Navbar';

const App = () => (
  <>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" render={ () => <div>Home</div> } />
        <Route exact path="/account/profile" render={ () => <div>Account</div> } />
      </Switch>
    </Container>
  </>
);

export default App;
