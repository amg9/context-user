import React from 'react';

const UserContext = React.createContext();

export const UserConsumer = UserContext.Consumer;

class UserProvider extends React.Component {
  state = {
    email: "universe@galaxy.net",
    firstName: "Jane",
    lastName: "Doe",
    avatar: "https://images-na.ssl-images-amazon.com/images/I/31HDsYgp0-L._SX425_.jpg",
    updateUser: (user) => this.updateUser(user),
  };

  updateUser = (user) => {
    this.setState({ ...user, });
  }

  render() {
    return (
      <UserContext.Provider value={this.state}>
        { this.props.children }
      </UserContext.Provider>
    )
  }
};

export default UserProvider;