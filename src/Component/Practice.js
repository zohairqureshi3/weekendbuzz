import React from "react";
import { Button, Row, Col, Image } from 'react-bootstrap';

const Practice = (props) =>{
    return(

        //practice

        <section className="practice">
			<div className="practice-back-heading">
				<h1>WHO WANTS TO WIN?</h1>
			</div>
			<div className="container-width">
				<Row>
					<Col md={6}>
						<div className="practice-content">
							<h3>Do You Want To Win, Activate Your Ptactice Mode.</h3>
							<p className="practice-italic">“The Difference between ordinary and extraordinary is practice”</p>
							<p>Curabitur vulputate arcu odio, ac facilisis diam accumsan ut. Ut imperdiet et leo in vulputate. Sed eleifend lacus eu sapien sagittis imperdiet. Etiam tempor mollis augue, ut tincidunt ex interdum eu. Pellentesque rhoncus lectus sed posuere viverra. Vestibulum id turpis lectus. Donec rhoncus quis elit sed fermentum. Nullam sit amet ex enim. Fusce nec suscipit nulla.</p>
							<Button className="btn-yellow">Start Practice</Button>
						</div>
					</Col>
					<Col md={6} className="d-flex align-items-center">
						<div className="practice-inner-image">
							<Image src="images/practice-col-img.svg" fluid/>
						</div>
					</Col>
				</Row>
			</div>
			<div className="practice-star-image">
				<Image src="images/practice-star.svg" fluid/>
			</div>
		</section>
    )
}

export default Practice;