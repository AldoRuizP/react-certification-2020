import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  height: var(--footer-size);
  background-color: var(--bg);
  color: white;
  position: absolute;
  width: 100%;
  text-align: center;
`;
const Text = styled.p``;
const Anchor = styled.a`
  font: inherit;
  color: var(--text-color);
  text-decoration: none;
`;

function Footer() {
  return (
    <Section>
      <Text>React Certification by Aldo Ruiz</Text>
      <Text>
        Icons made by
        <Anchor
          href="https://www.flaticon.com/authors/freepik"
          target="_blank"
          rel="noopener noreferrer"
        >
          &nbsp;Freepik&nbsp;
        </Anchor>
        from
        <Anchor
          href="https://www.flaticon.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          &nbsp;www.flaticon.com&nbsp;
        </Anchor>
      </Text>
      <Text>
        <Anchor
          href="https://iconscout.com/icon-pack/animal-flat-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          &nbsp;Animal Flat Colors Icon Pack&nbsp;
        </Anchor>
        by
        <Anchor
          href="https://iconscout.com/contributors/kerismaker"
          target="_blank"
          rel="noopener noreferrer"
        >
          &nbsp;Kerismaker&nbsp;
        </Anchor>
        on
        <Anchor href="https://iconscout.com" target="_blank" rel="noopener noreferrer">
          &nbsp;Iconscout&nbsp;
        </Anchor>
      </Text>
    </Section>
  );
}

export default Footer;
