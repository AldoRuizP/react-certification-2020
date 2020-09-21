import React from 'react';
import styled from 'styled-components';
import ScrollCard from '../ScrollCard';

const Wrapper = styled.div`
  position: relative;
  background-color: gray;
  padding: 5px 0;
  height: 850px;
  overflow: auto;
`;

const Container = styled.div``;

function Scroll() {
  return (
    <Wrapper>
      <Container>
        <ScrollCard />
        <ScrollCard />
        <ScrollCard />
        <ScrollCard />
        <ScrollCard />
        <ScrollCard />
        <ScrollCard />
        <ScrollCard />
        <ScrollCard />
        <ScrollCard />
        <ScrollCard />
        <ScrollCard />
        <ScrollCard />
      </Container>
    </Wrapper>
  );
}

export default Scroll;
