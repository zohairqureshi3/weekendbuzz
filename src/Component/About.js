import React from "react";
import { Button, Row, Col, Image } from 'react-bootstrap';

const About = (props) =>{
    return(

        // about

		<section className="about">
			<div className="container-width">
				<Row>
					<Col md={6}>
						<div className="about-area">
							<div className="about-star-image">
								<Image src="images/about-star.svg" fluid/>
							</div>
							<div className="about-inner-image">
								<Image src="images/about-col-img.png" fluid/>
							</div>
						</div>
					</Col>
					<Col md={6} className="d-flex align-items-center">
						<div className="about-content">
							<h3>About Contest</h3>
							<p>Curabitur vulputate arcu odio, ac facilisis diam accumsan ut. Ut imperdiet et leo in vulputate. Sed eleifend lacus eu sapien sagittis imperdiet. Etiam tempor mollis augue, ut tincidunt ex interdum eu. Pellentesque rhoncus lectus sed posuere viverra. Vestibulum id turpis lectus. Donec rhoncus quis elit sed fermentum. Nullam sit amet ex enim. Fusce nec suscipit nulla.</p>
							<Button className="btn-blue">Learn More</Button>
							<div className="about-lines">
								<Image src="images/about-lines.svg" fluid/>
							</div>
							<div className="about-triangles">
								<Image src="images/about-triangle.svg" fluid/>
							</div>
							<div className="about-circle">
								<Image src="images/about-circle.svg" fluid/>
							</div>
						</div>
					</Col>
				</Row>
			</div>
		</section>
    )
}

export default About;