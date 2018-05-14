import React, { Component } from 'react';
import Section from "../Section/Section";
import Heading from "../Heading/Heading";
import Pin from "../Pin/Pin";
import SmallText from "../SmallText/SmallText";
import Box from "../Box/Box";
import {boxes, icons} from "../../data.js";

import './App.css';


class App extends Component {
	render() {
		return (
			<div>

				<Section className="section head-section">
					<Heading 
						label="i am just another creative guy" 	
						className="head-heading"
					/>
					<div>
						<SmallText 
							content="who can build a memorable creative"
							className="small-text head-text"
						/>{' '}
						<SmallText 
							content="experinence for you" 
							className="small-text head-text head-text-green"
						/>
					</div>
					{
						icons.map((icon) => <Pin icon={icon} key={icon.iconName}/>)
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
							boxes.map((box) => <Box className="box" key={box.name} box={box} />)
						}
					</div>
				</Section>
			</div>
		);
	}
}

export default App;
