import React from 'react';
import styled from 'styled-components';
import { useFortune } from '../../utils/hooks/useFortune';

const Wrapper = styled.span`
  position: fixed;
  bottom: 0;
  right: 0;
`;

function Fortune() {
  const { fortune } = useFortune();

  return <Wrapper className="fortune">{fortune} </Wrapper>;
}

export default Fortune;
