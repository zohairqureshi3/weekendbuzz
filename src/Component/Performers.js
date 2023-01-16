import React from "react";
import Performerspositions from "./Performerspositions";
import { Button, Row, Col } from 'react-bootstrap';

const performers = (props) =>{
    return(

        //performers

        <section className="performers">
			<div className="container-width">
				<div className="performers-heading text-center">
					<h4>Top Performers</h4>
					<p>Here you may have a look on how the participants are performing</p>
				</div>
				<Row>
					<Performerspositions id="1" name="Muhammad Ramzan" score="Score" score_info="20.00" occupation="Occupation" occupation_info="Student" date="Date" date_info="Sat, Aug 14, 2021" image="3rd" image_tag="3rd-tag" background_color="#44D7B1" border="4px dashed #44D7B1"/>
                    <Performerspositions id="1" name="Rimsha Shahzad" score="Score" score_info="20.00" occupation="Occupation" occupation_info="Student" date="Date" date_info="Sat, Aug 14, 2021" image="1st" image_tag="1st-tag" background_color="#FEC12D" border="4px dashed #FEC12D"/>
                    <Performerspositions id="1" name="Atif Bashir" score="Score" score_info="20.00" occupation="Occupation" occupation_info="Developer" date="Date" date_info="Sat, Aug 14, 2021" image="2nd" image_tag="2nd-tag" background_color="#8725FB" border="4px dashed #8725FB"/>
				</Row>
			</div>
		</section>
    )
}

export default performers;