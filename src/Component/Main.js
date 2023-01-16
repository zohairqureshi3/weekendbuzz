import React from "react";
import Playquiz from "./Playquiz";
import { Button, Row, Col, Image  } from 'react-bootstrap';

const Main = (props) =>{
    return(
        //Main

        <section className="main">
			<div className="container-width">
				<Row >
					<Col md={6}>
						<div className="main-content text-center">
							<h1>Come, Play & Win</h1>
							<p>Let’s come and play the quiz with us and win exciting prizes</p>
							<Button className="btn-yellow">Get Started</Button>
						</div>
					</Col>
					<Col md={6} className="section-small-padding">
						<div className="main-inner-img">
							<Image src="images/main-col-img.png" fluid/>
						</div>
					</Col>
				</Row >
				<Row className="main-two-bg">
					<Col md={4} className="col-padding">
						<div className="main-two-content">
							<h4>How to play</h4>
							<p>Our programs are design to enhance your knowledge.</p>
						</div>
					</Col>
					<Col md={8}>
						<Row>
							<Playquiz id="1" heading="Enter In Quiz" information="Our programs are design to enhance your knowledge." image="Quiz_icon"/>
                            <Playquiz id="2" heading="Answer Questions" information="Our programs are design to enhance your knowledge." image="Question-Answer_icon"/>
                            <Playquiz id="3" heading="Win Prizes" information="Our programs are design to enhance your knowledge." image="prize_icon"/>
						</Row>
					</Col>
				</Row>
			</div>
		</section>
    )
}

export default Main;