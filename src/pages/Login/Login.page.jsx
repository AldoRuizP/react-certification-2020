import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { useAuth } from '../../providers/Auth';

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

function LoginPage() {
  const { login } = useAuth();
  const history = useHistory();

  function authenticate(event) {
    event.preventDefault();
    login();
    history.push('/');
  }

  return (
    <Section>
      <Wrapper>
        <Title>Welcome back!</Title>
        <Form onSubmit={authenticate}>
          <FormGroup>
            <Label htmlFor="username">
              <strong>username </strong>
              <Input required type="text" id="username" />
            </Label>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">
              <strong>password </strong>
              <Input required type="password" id="password" />
            </Label>
          </FormGroup>
          <Button type="submit">Login</Button>
        </Form>
      </Wrapper>
    </Section>
  );
}

export default LoginPage;
