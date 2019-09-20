import React from 'react';
import { Container, } from 'semantic-ui-react';
import { Switch, Route, } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserProfile from './components/UserProfile';

const App = () => (
  <>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" render={ () => <div>Home</div> } />
        <Route exact path="/user/profile" render={ () => <UserProfile />} />
        <Route render={ () => <div>404: No pages match this address</div> } />
      </Switch>
    </Container>
  </>
);

export default App;
