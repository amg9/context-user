import React from 'react';
import { Card, Image, } from 'semantic-ui-react';

const Account = () => (
  <Card>
    <Card.Content>
      <Card.Header>
        <Image 
          src="https://colourlex.com/wp-content/uploads/2017/04/Grape-seed-black-painted-swatch-12015-opt.jpg" 
          avatar 
        />
        Firstname lastname
      </Card.Header>
      <Card.Meta>email</Card.Meta>
    </Card.Content>
  </Card>
);

export default Account