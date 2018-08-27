// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

import { blueTheme as theme } from "./theme";

import { H1, H2, H3, H4, H5, H6 } from "./UI/elements";

// Require CSS
require("normalize.css");

const Button = ({ title }) => <button type="button">{title}</button>;

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["slide"]}
        transitionDuration={500}
        progress="bar"
        theme={theme}
      >
        <Slide transition={["slide"]} bgColor="bg">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Spectacle Boilerplate
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            open the presentation/index.js file to get started
          </Text>
          <CodePane lang="python" source="this is a test" theme="dark" />
          <Button title="button example" />
        </Slide>
        <Slide transition={["slide"]} bgColor="bg">
          <Heading size={6} textColor="primary" caps>
            Typography
          </Heading>
          <H3 textColor="lightGrey">Something</H3>
          <H1 textColor="secondary">Heading 1</H1>
          <Text size={6} textColor="secondary">
            Standard text
          </Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="bg" textColor="primary">
          <Heading size={6} textColor="secondary" caps>
            Standard List
          </Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="bg" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
