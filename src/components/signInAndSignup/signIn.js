import React from 'react';
import './signInstyle.scss';
import FormInput from '../formInputComponent/FormInput';
import { Link } from 'react-router-dom';

class SignInComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className='signIn'>
        <h1 className='title'>Login</h1>
        <form className='form' onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            handleChange={this.handleChange}
            value={this.state.email}
            type='email'
            label='Email'
            required
          />
          <FormInput
            name='password'
            handleChange={this.handleChange}
            value={this.state.password}
            type='password'
            label='Password'
            required
          />

          <input type='submit' value='Submit' />
          <span className='signup'>
            create account <Link to='/signup'>here</Link>
          </span>
        </form>
      </div>
    );
  }
}

export default SignInComponent;
