import React from "react";
import { Button, Row, Col, Image  } from 'react-bootstrap';

const Playquiz = (props) =>{
    return(

        //Playquiz

        <Col md={4}>
            <div className="main-two-content-separate">
                <div className="main-icon">
                    <Image src={`images/${props.image}.svg`} fluid/>
                </div>
                <h6>{props.heading}</h6>
                <p>{props.information}</p>
            </div>
        </Col>
    )

    
}

export default Playquiz;