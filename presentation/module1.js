// Import React
import React from 'react';

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
  Text,
} from 'spectacle';

import { tealTheme as theme } from './theme';

import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  Emoji,
  EmojiSmall,
  EmojiLarge,
  TitleSlide,
  ListSlide,
  Video,
} from './UI/elements';
import ReactPlayer from 'react-player';

import { MainSlide } from './Slides/mainSlide';

// Require CSS
require('normalize.css');

const Button = ({ title }) => <button type="button">{title}</button>;

export default class Module1 extends React.Component {
  render() {
    return (
      <Deck
        transition={['slide']}
        transitionDuration={500}
        progress="bar"
        theme={theme}
      >
        <Slide transition={['slide']} bgColor="bg">
          <H4 textColor="secondary">Welcome to</H4>
          <H2 textColor="primary">Data Collection & Management</H2>
        </Slide>
        <Slide transition={['slide']} bgColor="bg">
          <TitleSlide
            title="Before we begin,"
            content="There are a few things you should be aware of."
          />
        </Slide>

        <Slide transition={['slide']} bgColor="bg">
          <EmojiLarge textColor="primary">📗</EmojiLarge>
          <H4 textColor="primary">Journal Reflections</H4>
          <T6 textColor="secondary">
            Throughout this course, you will have occasional Journal
            Reflections. These reflections will let you take notes on your
            thoughts and insights as you progress through the modules. When you
            start working on the assignments, these journal entries will form a
            starting point for preparing your submission.
          </T6>
          <T6 textColor="secondary">
            These Journals will be Private and will be used only by yourself.
            You can take your notes in your favorite application.
          </T6>
          <T6 textColor="secondary">
            It is important that you get them done because they will determine
            the success of your assignments.
          </T6>
        </Slide>

        <Slide transition={['slide']} bgColor="bg">
          <EmojiLarge textColor="primary">🏢</EmojiLarge>
          <H4 textColor="primary">Target a Company</H4>
          <T6 textColor="secondary">
            You will have to <strong>choose a company</strong> to use as a
            reference when completing your assignments.
          </T6>
          <T6 textColor="secondary">
            This company could be your organization or the organization you
            aspire to work for.
          </T6>
          <T6 textColor="secondary">
            <strong>Tip:</strong> Do not choose a very large organization.
          </T6>
        </Slide>

        <Slide transition={['slide']} bgColor="bg">
          <EmojiLarge textColor="primary">🗣️</EmojiLarge>
          <H4 textColor="primary">Discussion Board</H4>
          <T6 textColor="secondary">
            Throughout this course, you will have to participate in online
            discussions. Here, you will have the chance to listen and learn from
            your peers as well as share your own ideas.
          </T6>
          <T6 textColor="secondary">
            The Discussion Boards will be <strong>public</strong> and they will
            account for <strong>15%</strong> of your final mark, (three (3)
            discussions at 5%).
          </T6>
          <T6 textColor="secondary">
            You will submit your entries through DC Connect.
          </T6>
        </Slide>

        <Slide transition={['slide']} bgColor="bg">
          <EmojiLarge textColor="primary">🌐</EmojiLarge>
          <H4 textColor="primary">Online Resources</H4>
          <T6 textColor="secondary">
            Throughout this course, you will have to read different online
            articles and extra resources.
          </T6>
          <T6 textColor="secondary">
            Some of them will be mandatory and others will be optional (to
            further your knowledge or understanding of the topic).
          </T6>
        </Slide>

        <Slide transition={['slide']} bgColor="bg">
          <H4 textColor="primary">Let's get to business!</H4>
        </Slide>

        <Slide transition={['slide']} bgColor="bg">
          <T5 textColor="secondary">
            Business data is more than revenue, web link clicks, and customer
            loyalty programs – data is everywhere. It is in your thermostat,
            recording the temperature settings and when a person makes a change;
            it is in transit data measuring how long trips to your store take;
            it is in the web links your future customers are sharing online.
            With a little bit of creativity, almost any source can be turned
            into actionable business insights.
          </T5>
          <EmojiSmall margin="60px 0" textColor="primary">
            🌡️ 🚌 🔗
          </EmojiSmall>
        </Slide>

        <Slide transition={['slide']} bgColor="bg">
          <ListSlide
            title="Did you know that..."
            content={[
              'Typing with proper capitalization indicates creditworthiness?',
              'Those who use Chrome and Firefox browsers make better employees?',
              'People buy more Strawberry Pop-Tarts before a hurricane?',
            ]}
          />
        </Slide>

        <Slide transition={['slide']} bgColor="bg">
          <H4 textColor="primary">Learning outcomes!</H4>
        </Slide>

        <Slide transition={['slide']} bgColor="bg">
          <ListSlide
            title="By the end of this module, you'll be able to:"
            content={[
              'Explain the key tasks in data collection and data management',
              'Define the term "Data Driven Organization"',
              'Discuss the impact that collecting data may have on individuals and society',
            ]}
          />
        </Slide>

        <Slide transition={['slide']} bgColor="bg-alt">
          <TitleSlide
            title="Activity!"
            content="Please go to the Discussion Board in DC Connect and introduce yourself by posting a message in the forum."
          />
        </Slide>

        <Slide transition={['slide']} bgColor="bg">
          <ListSlide
            title="Key Terms and Concepts"
            content={[
              'Velocity – The rate of generation of the data that is being generated and collected.',
              'Volume – The magnitude of the data that is being generated and collected.',
              'Variety – The different types of data that are being generated and collected.',
              'Veracity – The unreliability associated with the data sources.',
              'Variability – The variation in data velocity and volume.',
            ]}
          />
          <EmojiLarge margin="50px 0">📊</EmojiLarge>
        </Slide>

        <Slide transition={['slide']} bgColor="bg-alt">
          <TitleSlide
            title="Activity!"
            content="Journal Reflection - What do you hope to learn from this course?"
          />
        </Slide>

        <Slide transition={['slide']} bgColor="bg">
          <TitleSlide
            title="What is Big Data?"
            content="You may have heard people talking about &quot;Big Data&quot;. What is big data? Is it fundamentally new and different or the same old data with a different name? In this module, we’ll explore what makes big data different."
          />
          <EmojiLarge margin="50px 0">🧀</EmojiLarge>
        </Slide>

        <Slide transition={['slide']} bgColor="bg">
          <Video url="https://www.youtube.com/watch?v=8pHzROP1D-w" />
        </Slide>

        <Slide transition={['slide']} bgColor="bg">
          <ListSlide
            title="Data can be very useful within our organizations"
            content={[
              'Challenge long held assumptions, forcing us to take a fresh look at our business',
              'Help with business planning by predicting what might happen in the future',
              'Analyze several options and inform our decisions now to optimize the outcome',
            ]}
          />
        </Slide>

        <Slide transition={['slide']} bgColor="bg-alt">
          <TitleSlide
            title="Activity!"
            content={
              <div>
                Read the{' '}
                <a
                  target="_blank"
                  href="https://www.forbes.com/sites/adigaskell/2016/10/28/becoming-a-data-driven-organization/#4711c8524121"
                >
                  following article
                </a>
                . Once finished, pair up with the person beside you and share
                some of your thoughts. Why would companies move toward a data
                driven organization? What is a data driven culture?
              </div>
            }
          />
        </Slide>

        <Slide transition={['slide']} bgColor="bg">
          <ListSlide
            title="There are some common ways that business realign to become more data driven."
            content={[
              'Data driven business management',
              'Modernization of systems and processes',
              'Restructuring and reorganization',
            ]}
          />
        </Slide>

        <Slide transition={['slide']} bgColor="bg-alt">
          <TitleSlide
            title="Activity!"
            content="Journal Reflection - In groups of 3, each person must answer the 6 questions on the following slide. After 15 minutes, get together in your groups to share your ideas."
          />
        </Slide>

        <Slide transition={['slide']} bgColor="bg">
          <ListSlide
            content={[
              'Why does your organization need data now?',
              'What does it hope to accomplish?',
              'What business question is most important to answer and why?',
              'Is there a sense of urgency within the organization for data?',
              'Is the need for data firmly anchored with the corporate culture?',
              'How will the organization communicate with the data?',
            ]}
          />
        </Slide>

        <Slide transition={['slide']} bgColor="bg">
          <TitleSlide
            title="Properties of Data."
            content="Data can be anything – not just numbers. It can be images from traffic video feeds, text from customer reviews, or public transit routes. In fact, with a bit of creativity you can start to see almost anything as being data."
          />
        </Slide>

        <Slide transition={['slide']} bgColor="bg">
          <ListSlide
            title="In the world of big data, we focus not on what makes up the data – but its 5 V's"
            content={[
              'Example: Traffic data feeds have high velocity and high volume.',
              'Example: Yelp reviews have high variety and low veracity.',
              'Example: Public transit routes have high variability.',
            ]}
          />
        </Slide>

        <Slide transition={['slide']} bgColor="bg">
          <TitleSlide title="Quiz time!" />
        </Slide>

        <Slide transition={['slide']} bgColor="bg">
          <TitleSlide
            title="Societal Responsibilities and Obligations"
            content="As we are able to collect and process more data than ever before, we also need to pause and consider the implications of our data. How will the user of this data affect our customers? Our citizens? Our staff?"
          />
        </Slide>

        <Slide transition={['slide']} bgColor="bg">
          <TitleSlide title="What will a future without secrets look like?" />
        </Slide>

        <Slide transition={['slide']} bgColor="bg">
          <Video url="https://www.youtube.com/watch?v=H_pqhMO3ZSY" />
        </Slide>

        <Slide transition={['slide']} bgColor="bg">
          <TitleSlide title="What do we do with all this big data?" />
        </Slide>

        <Slide transition={['slide']} bgColor="bg">
          <Video url="https://www.youtube.com/watch?v=AWPrOvzzqZk" />
        </Slide>

        <Slide transition={['slide']} bgColor="bg">
          <EmojiLarge textColor="primary">👨‍👩‍👧‍👦</EmojiLarge>
          <H4 textColor="primary">Corporate Responsibilities for Data</H4>
          <T6 textColor="secondary">
            In the previous videos, we saw how data has the potential to help
            and the potential to harm. Consider the smoking example. "We can
            take data and make it mean anything". We can use data to understand
            how people talk about smoking and help them to quit. But we could
            just as easily use the same data to learn how to target children who
            are most likely start.
          </T6>
        </Slide>

        <Slide transition={['slide']} bgColor="bg">
          <ListSlide
            title="Where do we draw the line?"
            content={[
              'Privacy & Security',
              'Ownership & Transfer',
              'Civics & Infrastructure',
              'Data Literacy',
              'Ethics & Limitations',
            ]}
          />
        </Slide>

        <Slide transition={['slide']} bgColor="bg-alt">
          <TitleSlide title="Activity!" content="Journal Reflection" />
        </Slide>

        <Slide transition={['slide']} bgColor="bg">
          <ListSlide
            content={[
              'What policy concern is most critical for your organization?',
              'How might you address this policy concern?',
              'How would you feel if there was a data breach affecting your own personal data?',
            ]}
          />
        </Slide>

        <Slide transition={['slide']} bgColor="bg">
          <TitleSlide title="Summary" />
          <T6 textColor="secondary">
            Almost anything can be viewed as data. Today, we define data not
            based on its content but its attributes – velocity, volume, and
            variety. Many aspects or our modern world are now data – how much we
            walk, what we read, where we drive. These new sources of data
            compliment traditional business data – revenues, costs, page views –
            and allow us to answer a wide array of business questions. With this
            new data era comes new problems, both legal and societal. When
            thinking of new ways to use data we must also keep in mind to use
            the data responsibly.
          </T6>
          <T6 textColor="secondary">
            In the next module, we will explore a bit more how to balance the
            needs of the business with the needs of society. What are the
            practical requirements for using data in a business setting? What
            will you need to trade off to ensure value to the company? What
            societal impacts do these trade-offs create?
          </T6>
        </Slide>

        {/*<Slide transition={["slide"]} bgColor="bg" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>*/}
      </Deck>
    );
  }
}
