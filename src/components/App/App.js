import React, { Component } from 'react';
import Section from "../Section/Section";
import Heading from "../Heading/Heading";
import Pin from "../Pin/Pin";
import SmallText from "../SmallText/SmallText";
import Box from "../Box/Box";

import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import faCog from '@fortawesome/fontawesome-free-solid/faCog';
import faEdit from '@fortawesome/fontawesome-free-solid/faEdit';
import faThLarge from '@fortawesome/fontawesome-free-solid/faThLarge';
import faMapMarkerAlt from '@fortawesome/fontawesome-free-solid/faMapMarkerAlt';

import faMobileAlt from '@fortawesome/fontawesome-free-solid/faMobileAlt';
import faPencilAlt from '@fortawesome/fontawesome-free-solid/faPencilAlt';
import faPrint from '@fortawesome/fontawesome-free-solid/faPrint';
import faThList from '@fortawesome/fontawesome-free-solid/faThList';

import './App.css';

const icons = [
  faCog,
  faEdit,
  faThLarge,
  faMapMarkerAlt
];

const boxes = [
  {
    icon: faMobileAlt,
    name: "websites",
    price: 350,
    description: "I develop websites, meaning your website will look good on any device, wheather it is a computer, mobile or tablet.",
  },
  {
    icon: faPencilAlt,
    name: "identity",
    price: 140,
    description: "Crafting a great brand image requires a full understanding of your business, target market and existing clientele",
  },
  {
    icon: faPrint,
    name: "print",
    price: 140,
    description: "I love print. I belive the selection of quality material is just as important as the design: it adds value to your brand.",
  },
  {
    icon: faThList,
    name: "user interface",
    price: 190,
    description: "I love to create minimalist and clean UX/UI. I/'m a strong believer that minimalism is the key to a great user interface.",
  },
];


class App extends Component {
  render() {
    return (
      <div>

        <Section className="section head-section">
          <Heading label="i am just another creative guy" className="head-heading"/>
          <div>
			<SmallText 
				content="who can build a memorable creative"
				className="small-text head-text"
			/>{' '}
			<SmallText 
				content="experinence for you" 
				className="small-text head-text head-text-green"/>
          </div>
          {
            icons.map((icon, index) => <Pin icon={icon} key={icon.iconName}/>)
          }
        </Section>

        <Section className="section foot-section">
            <Heading label="what i do" className="foot-heading" />
            <SmallText 
              content="I specialize in creating inspirational websites, logos, brochures and app UX/UI for great individuals and small to large sized companies across the world helping them to market their business successfully"
              className="foot-text"
            />
            <div className="box-container">
              {
                boxes.map((box) => (
                  <Box className="box" key={box.name}>
                    <div className="box-icon">
                      <FontAwesomeIcon icon={box.icon}/>
                    </div>
                    <p className="box-name">{box.name}</p>
					<SmallText 
						content={`Starts from $${box.price}`} 
						className="box-price" />
                    <SmallText content={box.description} className="small-text box-desc" />
                  </Box>
                ))
              }
            </div>
        </Section>
      </div>
    );
  }
}

export default App;
