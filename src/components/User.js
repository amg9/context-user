import React from 'react';
import { Card, Image, } from 'semantic-ui-react';
import { UserConsumer, } from '../providers/UserProvider';

const User = () => (
  <UserConsumer>
    { user => (
      <Card>
        <Card.Content>
          <Card.Header>
            <Image 
              src={user.avatar}
              avatar 
            />
            {user.firstName} {user.lastName}
          </Card.Header>
          <Card.Meta>{user.email}</Card.Meta>
        </Card.Content>
      </Card>
    )}
  </UserConsumer>
);

export default User