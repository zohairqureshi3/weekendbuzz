import React from "react";
import { Button, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid';

const Footer = (props) =>{
    return(

        //footer

        <section className="footer">
			<div className="container-width">
				<div className="footer-content">
					<div className="footer-logo text-center">
						<Image src="images/footer-logo.svg" fluid/>
					</div>
					<p className="text-center">Powered by Mathlete - Let’s Play Math!</p>
					<div className="footer-links d-flex justify-content-center">
						<div className="app-store">
							<a href="#"><Image src="images/Apps-Store.svg" fluid/></a>
						</div>
						<div className="google-play">
						<a href="#"><Image src="images/Google-Store.svg" fluid/></a>
						</div>
					</div>
					<div className="footer-social d-flex justify-content-center">
						{/* <FontAwesomeIcon icon={faCoffee}/> */}
						<a href="#"><i className="fa fa-facebook facebook"></i></a>
						<a href="#"><i className="fa fa-twitter social-icons"></i></a>
						<a href="#"><i className="fa fa-instagram social-icons"></i></a>
						<a href="#"><i className="fa fa-youtube-play social-icons" aria-hidden="true"></i></a>
					</div>
					<div className="footer-contact d-flex align-items-center justify-content-center">
						<div className="footer-contact-icons d-flex align-items-center">
							<a href="#" className="d-flex align-items-center"><i className="fa fa-envelope" aria-hidden="true"></i>
							<p>support@weekendbuzz.com</p></a>
						</div>
						<div className="footer-contact-icons d-flex align-items-center">
							<a href="#" className="d-flex align-items-center"><i className="fa fa-phone" aria-hidden="true"></i>
							<p>support@weekendbuzz.com</p></a>
						</div>
						<div className="footer-contact-icons d-flex align-items-center">
							<a href="#" className="d-flex align-items-center"><i className="fa fa-whatsapp" aria-hidden="true"></i>
							<p>support@weekendbuzz.com</p></a>
						</div>
					</div>
					<div className="border-area">
						<div className="border-area-content">
							<p>Copyright © 2021 - weekend buzz - All rights reserved.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
}

export default Footer;