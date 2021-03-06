import React from 'react';
import { Menu, } from 'semantic-ui-react';
import { NavLink, } from 'react-router-dom';
import { UserConsumer, } from '../providers/UserProvider';

const Navbar = () => (
  <UserConsumer>
    { user => (
      <Menu>
        <NavLink to="/">
          <Menu.Item>
            Home
          </Menu.Item>
        </NavLink>
        <NavLink to="/user/profile">
          <Menu.Item>
            {user.email}
          </Menu.Item>
        </NavLink>
      </Menu>
    )}
  </UserConsumer>
);

export default Navbar;