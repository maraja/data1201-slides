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

import { H1, H2, H3, H4, H5, H6, T1, T2, T3, T4, T5, T6 } from "../UI/elements";

export class MainSlide extends React.Component {
  render = () => (
    <Slide {...this.props}>
      <H4 textColor="secondary">Welcome to</H4>
      <H2 textColor="primary">Data Collection & Management</H2>
    </Slide>
  );
}
