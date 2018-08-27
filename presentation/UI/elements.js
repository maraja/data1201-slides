// Import React
import React from "react";

import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

import ReactPlayer from "react-player";

export class H1 extends React.Component {
  render = () => (
    <Heading {...this.props} size={1}>
      {this.props.children}
    </Heading>
  );
}

export class H2 extends React.Component {
  render = () => (
    <Heading {...this.props} size={2}>
      {this.props.children}
    </Heading>
  );
}

export class H3 extends React.Component {
  render = () => (
    <Heading {...this.props} size={3}>
      {this.props.children}
    </Heading>
  );
}

export class H4 extends React.Component {
  render = () => (
    <Heading {...this.props} size={4}>
      {this.props.children}
    </Heading>
  );
}
export class H5 extends React.Component {
  render = () => (
    <Heading {...this.props} size={5}>
      {this.props.children}
    </Heading>
  );
}
export class H6 extends React.Component {
  render = () => (
    <Heading {...this.props} size={6}>
      {this.props.children}
    </Heading>
  );
}

export class T1 extends React.Component {
  render = () => (
    <Text margin="20px 0 0 0" textSize={50} {...this.props}>
      {this.props.children}
    </Text>
  );
}

export class T2 extends React.Component {
  render = () => (
    <Text margin="20px 0 0 0" textSize={45} {...this.props}>
      {this.props.children}
    </Text>
  );
}

export class T3 extends React.Component {
  render = () => (
    <Text margin="20px 0 0 0" textSize={40} {...this.props}>
      {this.props.children}
    </Text>
  );
}

export class T4 extends React.Component {
  render = () => (
    <Text margin="20px 0 0 0" textSize={35} {...this.props}>
      {this.props.children}
    </Text>
  );
}
export class T5 extends React.Component {
  render = () => (
    <Text margin="20px 0 0 0" textSize={30} {...this.props}>
      {this.props.children}
    </Text>
  );
}
export class T6 extends React.Component {
  render = () => (
    <Text margin="20px 0 0 0" textSize={25} {...this.props}>
      {this.props.children}
    </Text>
  );
}

export class Emoji extends React.Component {
  render = () => (
    <H2 margin="20px 0" {...this.props}>
      {this.props.children}
    </H2>
  );
}

export class EmojiLarge extends React.Component {
  render = () => (
    <H1 margin="20px 0" {...this.props}>
      {this.props.children}
    </H1>
  );
}

export class EmojiSmall extends React.Component {
  render = () => (
    <H3 margin="20px 0" {...this.props}>
      {this.props.children}
    </H3>
  );
}

export const TitleSlide = ({ title, content }) => (
  <div>
    {title && <H4 textColor="primary">{title}</H4>}
    {content && <T6 textColor="secondary">{content}</T6>}
  </div>
);

export const ListSlide = ({ title, content }) => (
  <div>
    {title && (
      <T2 textAlign="left" margin="auto auto 50px auto" textColor="primary">
        {title}
      </T2>
    )}

    {content.map((c) => (
      <T6 textAlign="left" margin="20px auto auto 30px" textColor="secondary">
        {c}
      </T6>
    ))}
  </div>
);

export const Video = ({ url }) => (
  <div>
    <ReactPlayer url={url} width="960px" height="640px" />
    <T5 textColor="secondary">
      <a target="_blank" href={url}>
        Video Source
      </a>
    </T5>
  </div>
);
