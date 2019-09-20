import React from 'react';
import { Form, } from 'semantic-ui-react';

class AccountForm extends React.Component {
  state = { email: "", firstName: "", lastName: "", avatar: "", };
  
  handleChange = (e, { name, value, }) => {
    this.setState({[name]: value,})
  };

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            label="email"
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            />
          <Form.Input
            label="First Name"
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
            />
          <Form.Input
            label="Last Name"
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
            />
          <Form.Select 
            label="Avatar"
            name="avatar"
            value={this.state.avatar}
            onChange={this.handleChange}
            options={avatarOptions}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    );
  };
};

const avatarOptions = [
  { 
    key: "d", 
    text: "Diamond", 
    value: "http://img.clipartlook.com/clip-art-shapes-diamond-diamond-shape-clipart-490_584.jpg",
  },
  { 
    key: "s", 
    text: "Star", 
    value: "https://cdn10.bigcommerce.com/s-npe4l/products/1418/images/2090/M-REC-DGRSTAR---HIGH__37390.1531409269.1280.1280.jpg?c=2", 
  },
  { 
    key: "p", 
    text: "Pentagon", 
    value: "https://images-na.ssl-images-amazon.com/images/I/31HDsYgp0-L._SX425_.jpg",
  },
];

export default AccountForm;