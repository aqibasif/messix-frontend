import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './Common/input';
import { Link, Redirect } from 'react-router-dom';
import auth from '../services/authService';

class LoginPage extends Component {
  state = {
    data: { username: '', password: '' },
    errors: {},
    isProcessing: false,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  schema = {
    username: Joi.string().required().label('Username'),
    password: Joi.string().required().label('Password'),
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data, errors });
  };

  doSubmit = async () => {
    try {
      this.setState({ isProcessing: true });
      const { data } = this.state;
      await auth.login(data.username, data.password);

      this.props.updateUser();
      this.props.history.push('/');
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        this.setState({ isProcessing: false });
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    const { data, errors, isProcessing } = this.state;

    if (auth.getCurrentUser()) return <Redirect to='/' />;

    return (
      <>
        <div className='login-page'>
          <div className='login-page-form'>
            <h1>Login</h1>
            <p>
              Don't have an account yet?{' '}
              <Link to='/signup'>
                <i>Create account</i>
              </Link>
            </p>
            <form onSubmit={this.handleSubmit}>
              <Input
                type='text'
                placeholder='Username'
                name='username'
                value={data.username}
                onChange={this.handleChange}
                error={errors.username}
              />
              <Input
                type='password'
                placeholder='Password'
                name='password'
                value={data.password}
                onChange={this.handleChange}
                error={errors.password}
              />

              <button
                disabled={this.validate() || isProcessing}
                className='login-btn continue-to-shipping'
              >
                {!isProcessing ? 'Login' : <span>Logining in...</span>}
              </button>
            </form>
          </div>
        </div>
        <div className='footer'>
          <p>
            Designed and Developed by{' '}
            <a
              target='_blank'
              rel='noreferrer'
              href='https://aqibasif.vercel.app'
            >
              Muhammad Aqib Asif
            </a>
          </p>
        </div>
      </>
    );
  }
}

export default LoginPage;
