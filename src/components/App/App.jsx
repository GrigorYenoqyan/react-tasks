import React, { Component } from 'react';
import Section from "./Section/Section";
import Heading from "./Heading/Heading";
import Pin from "./Pin/Pin";
import SmallText from "./SmallText/SmallText";
import './App.css';

// const icons = [
//   '<i class="fa fa-cog" aria-hidden="true"></i>',
//   '<i class="fa fa-pencil-square-o" aria-hidden="true"></i>',
//   '<i class="fa fa-th-large" aria-hidden="true"></i>',
//   '<i class="fa fa-map-marker" aria-hidden="true"></i>'
// ];

const icons = [
  'fa fa-cog',
  'fa fa-pencil-square-o',
  'fa fa-th-large',
  'fa fa-map-marker'
];

class App extends Component {
  render() {
    return (
      <div>
        <Section className="head-section">
          <Heading label="i am just another creative guy" className="head-heading"/>
          <div>
          <SmallText content="who can build a memorable creative" className="head-text"/>{' '}
          <SmallText content="experinence for you" className="head-text-green"/>
          </div>
            {
              icons.map((icon) => <Pin icon={icon} />)
            }
        </Section>
      </div>
    );
  }
}

export default App;
