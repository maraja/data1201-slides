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
  Notes,
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

import cap_theorem from '../assets/cap_theorem.jpg';

import { MainSlide } from './Slides/mainSlide';

// Require CSS
require('normalize.css');

const Button = ({ title }) => <button type="button">{title}</button>;

export default class Module2 extends React.Component {
  render() {
    return (
      <Deck
        transition={['slide']}
        transitionDuration={500}
        progress="bar"
        theme={theme}
      >
        <Slide transition={['slide']} bgColor="bg">
          <H4 textColor="secondary">Module 2</H4>
          <H3 textColor="primary">
            Balancing Business Needs with Societal Impact
          </H3>
        </Slide>
        <Slide transition={['slide']} bgColor="bg">
          <Notes>
            <T6 textColor="primary">
              Benjamin Parker, “Uncle Ben” to Spiderman’s alter ego Peter
              Parker, reminds us that, “With great power comes great
              responsibility. As data promises to fundamentally change the way
              we do business, we must also step back and consider our
              obligations to society at large. If a user requests to have their
              data removed, do we have an obligation to remove it? If law
              enforcement seeks unfettered access to our data, do we have an
              obligation to provide it? The practical issue is how to balance
              concerns like privacy and security with the data needs of the
              organization. <br />
              <br />
              Despite our best intentions, balancing these concerns is often
              dictated by technology constraints. While we may wish to allow
              users to delete content, it may be impossible to update every
              instance of that content. There may still be data backups that
              contain the removed data – can we delete from those backups?
              Perhaps it will take a few hours for the deletion to take full
              effect – do we allow access to records that may have the removed
              content? Often what our technology is capable of determines what
              services we can provide to society. <br />
              <br />
              We are also constrained by people’s biases. People will bring
              their own experiences, which may lead to incorrectly interpreting
              the data. These biases might lead to incorrect decisions that
              negatively affect society. Company decision makers that believe
              women are worse engineers than men may cite data showing women
              engineers have lower performance scores than their male
              counterparts. But is this because women are worse engineers or
              because the company creates a toxic work environment for women?
              How do we balance the need to honestly report the data we have
              against potential harms when people choose to use the data in a
              negative way? <br />
              <br />
              In this module, we explore questions related to the technology
              constraints and our obligations to society. We will frame this
              module and future ones, in terms of the Data Value Chain. The Data
              Value Chain is a series of steps and processes that occur between
              the data being generated and a business decision. Each step in the
              chain brings technological and societal questions – answers to
              which may often be at odds.
            </T6>
          </Notes>
          <TitleSlide title="Introduction" />
        </Slide>

        <Slide transition={['slide']} bgColor="bg">
          <ListSlide
            title="Learning outcomes"
            content={[
              'Map the data collection and management needs for an organization',
              'Analyze trade-offs between system workload and performance in high volume data systems',
              'Define the CAP theorem',
              'Create a data management plan that balances the needs of the organization against the legal and moral obligations to society and individuals',
            ]}
          />
        </Slide>

        <Slide transition={['slide']} bgColor="bg">
          <TitleSlide content="Let's take a look at some key terms and concepts." />
        </Slide>

        <Slide transition={['slide']} bgColor="bg">
          <Notes>
            <T6 textColor="primary">
              Example: Direct deposit of your pay check is a financial
              transaction. <br />
              <br />
              Example: Recording that you were given a pain medication in a
              hospital is a medical transaction.
            </T6>
          </Notes>
          <EmojiLarge textColor="primary">💳</EmojiLarge>
          <H3 textColor="primary">Transaction</H3>
          <T5 textColor="secondary">
            A transaction symbolizes a unit of work performed within a database
            management system (or similar system) against a database, and
            treated in a coherent and reliable way independent of other
            transactions. A transaction generally represents any change in a
            database.
          </T5>
        </Slide>

        <Slide transition={['slide']} bgColor="bg">
          <Notes>
            <T6 textColor="primary">
              Example: Direct deposit of your pay check is atomic. Money is
              debited from your employers account and credited to yours.
              <br />
              <br />
              Example: Receiving pain medication in the hospital is atomic. The
              pain medication is removed from the hospital inventory and added
              to your medical record.
            </T6>
          </Notes>
          <EmojiLarge textColor="primary">⚛️</EmojiLarge>
          <H3 textColor="primary">Atomicity</H3>
          <T5 textColor="secondary">
            An atomic transaction is an indivisible and irreducible series of
            database operations such that either all occur or nothing occurs. A
            guarantee of atomicity prevents updates to the database occurring
            only partially, which can cause greater problems than rejecting the
            whole series outright. As a consequence, the transaction cannot be
            observed to be in progress by another database client. At one moment
            in time, it has not yet happened, and at the next it has already
            occurred in whole (or nothing happened if the transaction was
            cancelled in progress).
          </T5>
        </Slide>

        <Slide transition={['slide']} bgColor="bg">
          <Notes>
            <T6 textColor="primary">
              Example: When your pay check is direct deposited, both your
              account and your employers account shows the transfer.
              <br />
              <br />
              Example: When you received pain medication in the hospital, both
              the hospital inventory and your medical record shows the
              administration of the drug.
            </T6>
          </Notes>
          <EmojiLarge textColor="primary">🏃‍</EmojiLarge>
          <H3 textColor="primary">Consistency</H3>
          <T5 textColor="secondary">
            Consistency in database systems refers to the requirement that any
            given database transaction must change affected data only in allowed
            ways. Any data written to the database must be valid according to
            all defined rules, including constraints, cascades, triggers, and
            any combination thereof. This does not guarantee correctness of the
            transaction in all ways the application programmer might have wanted
            (that is the responsibility of application-level code) but merely
            that any programming errors cannot result in the violation of any
            defined rules.
          </T5>
        </Slide>

        <Slide transition={['slide']} bgColor="bg">
          <Notes>
            <T6 textColor="primary">
              Example: when a user is creating a Purchase Order and has created
              the header, but not the Purchase Order lines, is the header
              available for other systems/users, carrying out concurrent
              operations (such as a report on Purchase Orders), to see?
              <br />
              <br />
              Example: When you are involved in an auto accident, your insurance
              company will fill in your information. The information about the
              other insurance company will be left blank until those details are
              received. Other users in the insurance company can still view the
              claim, despite missing information.
            </T6>
          </Notes>
          <EmojiLarge textColor="primary">💧</EmojiLarge>
          <H3 textColor="primary">Isolation</H3>
          <T5 textColor="secondary">
            In database systems, isolation determines how transaction integrity
            is visible to other users and systems.
          </T5>
        </Slide>

        <Slide transition={['slide']} bgColor="bg">
          <Notes>
            <T6 textColor="primary">
              Example: You are booking an online flight. You have selected and
              confirmed your seat, but your browser crashes before you can enter
              your payment information. In a durable system, when you finally
              log back on, in a durable system your seat selection will have
              been saved on a remote data base and you will be able to continue
              your purchase.
            </T6>
          </Notes>
          <EmojiLarge textColor="primary">🧗‍</EmojiLarge>
          <H3 textColor="primary">Durability</H3>
          <T5 textColor="secondary">
            In database systems, durability is the property which guarantees
            that committed transactions will survive permanently.
          </T5>
        </Slide>

        <Slide transition={['slide']} bgColor="bg">
          <Notes>
            <T6 textColor="primary">
              Example: An insurance company offers home and auto insurance. They
              can partition their insurance policies into 2 tables: a home
              policy table and an auto insurance table.
              <br />
              <br />
              Example: A large online retailer can store delivery addresses in
              separate tables for each province.
            </T6>
          </Notes>
          <EmojiLarge textColor="primary">🍕</EmojiLarge>
          <H3 textColor="primary">Partition</H3>
          <T5 textColor="secondary">
            Partitioning is the database process where very large tables are
            divided into multiple smaller parts. By splitting a large table into
            smaller, individual tables, queries that access only a fraction of
            the data can run faster because there is less data to scan.
          </T5>
        </Slide>

        <Slide transition={['slide']} bgColor="bg">
          <Notes>
            <T6 textColor="primary">
              Example: An insurance company offers home and auto insurance. They
              can partition their insurance policies into 2 tables: a home
              policy table and an auto insurance table.
              <br />
              <br />
              Example: A large online retailer can store delivery addresses in
              separate tables for each province.
            </T6>
          </Notes>
          <EmojiLarge textColor="primary">🕸️</EmojiLarge>
          <H3 textColor="primary">Schema</H3>
          <T5 textColor="secondary">
            A database schema is the skeleton structure that represents the
            logical view of the entire database. It defines how the data is
            organized and how the relations among them are associated. It
            formulates all the constraints that are to be applied on the data.
            <br />
            <br />A database schema defines its entities and the relationship
            among them.
          </T5>
        </Slide>

        <Slide transition={['slide']} bgColor="bg-alt">
          <TitleSlide
            title="Quiz time!"
            content={
              <div>
                <a href="https://kahoot.it/" target="_blank">
                  Kahoot link.
                </a>
              </div>
            }
          />
        </Slide>

        <Slide transition={['slide']} bgColor="bg">
          <TitleSlide
            title="Data Technology"
            content="What we can do with our data -- the insights we can extract and questions we can answer -- hinges on the technology we choose.  Unfortunately, there is no single solution that can answer every business challenge.  We must understand the technology constraints and trade-offs inherent in the technology.  Let's first start with the Data Value Chain."
          />
        </Slide>

        <Slide transition={['slide']} bgColor="bg">
          <Notes>
            <T6 textColor="primary">
              Data management is not a single entity. There are many moving
              parts, each with its own challenges. In general, Data management
              consists of 6 stages:
            </T6>
          </Notes>
          <ListSlide
            title="The Data Value Chain"
            content={[
              'Data Generation',
              'Data Collection',
              'Data Transmission',
              'Data Preprocessing',
              'Data Storage',
              'Data Analytics',
            ]}
          />
        </Slide>

        <Slide transition={['slide']} bgColor="bg-alt">
          <TitleSlide
            title="Activity!"
            content="In pairs, think of some of the data collected by DC Connect. Note how the data goes through the 6 phases of The Data Value Chain."
          />
        </Slide>

        <Slide transition={['slide']} bgColor="bg">
          <ListSlide
            content={[
              'Data Generation – Where is the data coming from?  Can the source of the data be trusted?  How can we verify the accuracy of the data?',
              'Data Collection – What is the velocity of the data being collected?  What is the volume of the data?  Given these constraints, can we as a business afford to monitor the data to ensure integrity and accuracy?',
              'Data Transmission – Where is the data coming from and going to?  How can we ensure that the data is secure?  Are there opportunities for a third party to tap into the data?',
              'Data Preprocessing – Is there Noisy Data?  Is there redundant data?  How to deal with errors – ignore or fix?',
              'Data Storage – Which is most important: Consistency? Availability? Partition Tolerance?  (See discussion below for more details)',
              'Data Analytics – What metrics are being extracted? What accuracy can we guarantee?  What visualizations are needed for the business?',
            ]}
          />
        </Slide>

        <Slide transition={['slide']} bgColor="bg">
          <TitleSlide
            title="Note!"
            content="Obviously, some steps may be incompatible.  High velocity and volume data will make data preprocessing harder.  In that case it might be better to skip the data processing step and store everything directly in a data store."
          />
        </Slide>

        <Slide transition={['slide']} bgColor="bg">
          <TitleSlide title="CAP Theorem!" />
        </Slide>

        <Slide transition={['slide']} bgColor="bg">
          <Video url="https://www.youtube.com/watch?v=UXes4JwUG3w" />
        </Slide>

        <Slide transition={['slide']} bgColor="bg">
          <img src={cap_theorem} style={{ maxWidth: '100%' }} />
        </Slide>

        <Slide transition={['slide']} bgColor="bg">
          <TitleSlide
            title="CAP Theorem"
            content="In theoretical computer science, the CAP theorem, also named Brewer's theorem after computer scientist Eric Brewer, states that it is impossible for a distributed data store to simultaneously provide more than two out of the following three guarantees the following..."
          />
        </Slide>

        <Slide transition={['slide']} bgColor="bg">
          <TitleSlide
            title="Consistency"
            content="Every read receives the most recent write or an error."
          />
        </Slide>

        <Slide transition={['slide']} bgColor="bg">
          <TitleSlide
            title="Availability"
            content="Every request receives a (non-error) response – without a guarantee that it contains the most recent write."
          />
        </Slide>

        <Slide transition={['slide']} bgColor="bg">
          <TitleSlide
            title="Partition Tolerance"
            content="The system continues to operate despite an arbitrary number of messages being dropped (or delayed) by the network between nodes."
          />
        </Slide>

        <Slide transition={['slide']} bgColor="bg-alt">
          <TitleSlide
            title="Journal Reflection!"
            content="Think about the data management problem for your organization.  What are your thoughts on the processing needs?  Think about the CAP theorem constraints.  Which do you absolutely need to have?  Which can you ignore?"
          />
        </Slide>

        <Slide transition={['slide']} bgColor="bg-alt">
          <TitleSlide
            title="Let's investigate"
            content={
              <div>
                <T6 textColor="secondary">
                  Take a look at the following link for 5 minutes. Try to think
                  of how Google has accomplished to go against the CAP theorem.
                  <br />
                  <br />
                  <a href="https://cloud.google.com/spanner/" target="_blank">
                    Link
                  </a>
                </T6>
              </div>
            }
          />
        </Slide>

        <Slide transition={['slide']} bgColor="bg">
          <TitleSlide
            title="Societal Constraints"
            content="It's not just the technology that limits what we can and can't answer.  We also need to consider constraints that society has created, both legal and moral.  Just because we have the data and the technology doesn't mean we can or should do things that are harmful to people or groups."
          />
        </Slide>

        <Slide transition={['slide']} bgColor="bg">
          <ListSlide
            content={[
              'Data Generation: Who owns the data?  Can someone generate malicious or harmful data?',
              'Data Collection: Do we have the right to collect the data?  Are our collection techniques an intrusion on privacy?  Are our collection techniques and intrusion on privacy?',
              'Data Transmission: Should confidential or sensitive information be digitized and transmitted?  What are the consequences if a third party intercepts the data?',
              'Data Preprocessing: Are we biasing our data through cleaning?  Does the combination of data from multiple sources reveal more about a person than they would want revealed?',
              'Data Storage: What are the consequences if two differing versions of the same data are released?  What happens if the data is temporarily unavailable?  What is the impact if data is lost?',
              'Data Analysis: Do our algorithms introduce unintended bias?  Will our output be used in a way that could adversely affect someone else?',
            ]}
          />
        </Slide>

        <Slide transition={['slide']} bgColor="bg">
          <TitleSlide
            title="Assignment 1"
            content="In this assignment, you will create a Data Collection and Management Map.  This is a high level view of your entire data pipeline.  Throughout the course you will be referring to this Map as you drill down into specific areas."
          />
        </Slide>

        <Slide transition={['slide']} bgColor="bg">
          <Video url="https://www.youtube.com/watch?v=uUhPzBR1qzI" />
        </Slide>

        <Slide transition={['slide']} bgColor="bg-alt">
          <TitleSlide
            title="Discussion Board - Graded Activity"
            content="Pick an application of your choosing.  For that application think about the data that would need to be collected.  What security and privacy concerns might you have for the data?  What safeguards might you take to ensure that the data is not misused? This is due by the end of next week!"
          />
        </Slide>

        <Slide transition={['slide']} bgColor="bg-alt">
          <TitleSlide
            title="Journal Reflection"
            content="Think about the organization that you chose at the beginning and answer the question:
            Which technological issues might be a challenge for your problem?
            "
          />
        </Slide>

        <Slide transition={['slide']} bgColor="bg">
          <TitleSlide
            title="Summary"
            content={
              <div>
                <T6 textColor="secondary">
                  This module introduced the Data Value Chain and discussed many
                  of the technical and ethical issues to address in each step.
                  Sometimes balancing the two comes down to making business
                  trade-offs; sometimes there are more fundamental limitations.
                  A key first step in Data Management is defining the technical
                  and societal concerns upfront, then explore ways to achieve a
                  balance. <br />
                  <br />
                  In the following modules, we will look at concrete solutions
                  to many of the questions raised in this module. The next
                  module will look at the history of data collection and
                  management: what problems have been encountered in the past
                  and how have they been dealt with.
                </T6>
              </div>
            }
          />
        </Slide>
      </Deck>
    );
  }
}
