import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { useAuth } from '../../providers/Auth';

const { REACT_APP_DEFAULT_USERNAME, REACT_APP_DEFAULT_PASSWORD } = process.env;

const Section = styled.section`
  min-height: 77vh;
  display: grid;
  place-items: center;
`;

const Wrapper = styled.div`
  width: 300px;
  display: grid;
  place-items: center;
`;

const Title = styled.h1`
  text-align: center;
  letter-spacing: -1px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  & strong {
    display: block;
    font-weight: 700;
    text-transform: capitalize;
    margin-bottom: 0.4rem;
  }
`;

const Input = styled.input`
  color: black;
  font-size: 1.2rem;
  width: 100%;
  padding: 0.4rem 0.6rem;
  border-radius: 3px;
  border: 1px solid white;
  background-color: rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
    box-shadow: 1px 1px 1px 1px black;
  }
`;

const Button = styled.button`
  width: 5rem;
  margin-top: 1rem;
  padding: 0.4rem 0.6rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 3px;
`;

const Hint = styled.span`
  color: red;
  margin-top: 20px;
  font-size: 15px;
`;

function LoginPage() {
  const { login } = useAuth();
  const history = useHistory();

  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [hint, setHint] = useState('');

  function handleUserChange(event) {
    event.preventDefault();
    setUser(event.target.value);
  }

  function handlePasswordChange(event) {
    event.preventDefault();
    setPass(event.target.value);
  }

  function authenticate(event) {
    event.preventDefault();
    if (user === REACT_APP_DEFAULT_USERNAME && pass === REACT_APP_DEFAULT_PASSWORD) {
      login();
      history.push('/');
    } else {
      setHint(
        <div>
          <p>Pro tip: Try using these credentials</p>
          <p>Username: {REACT_APP_DEFAULT_USERNAME}</p>
          <p>Password: {REACT_APP_DEFAULT_PASSWORD}</p>
        </div>
      );
    }
  }

  return (
    <Section>
      <Wrapper>
        <Title>Welcome back!</Title>
        <Form onSubmit={authenticate}>
          <FormGroup>
            <Label htmlFor="username">
              <strong>username </strong>
              <Input
                required
                type="text"
                id="username"
                onChange={handleUserChange}
                value={user}
              />
            </Label>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">
              <strong>password </strong>
              <Input
                required
                type="password"
                id="password"
                onChange={handlePasswordChange}
                value={pass}
              />
            </Label>
          </FormGroup>
          <Button type="submit">Login</Button>
        </Form>
      </Wrapper>
      <Hint>{hint}</Hint>
    </Section>
  );
}

export default LoginPage;
