import React from "react";
import { Button, Row, Col, Image } from 'react-bootstrap';

const Performerspositions = (props) =>{
    return(

        <Col md={6} lg={4} className="col-margin">
            <div className="performers-area" style={{border: `${props.border}`}}>
                <div className="performers-content  text-center" style={{background: `${props.background_color}`}}>
                    <div className="performers-content-image">
                        <div className="position-3rd-tag">
                            <Image src={`images/${props.image_tag}.svg`} fluid/>
                        </div>
                        <div className="position-3rd">
                            <Image src={`images/${props.image}.png`} fluid/>
                        </div>
                    </div>
                    <h5>{props.name}</h5>
                    <div className="performers-content-info">
                        <div className="performers-content-info-text">
                            <h5>{props.score}</h5>
                        </div>
                        <div className="performers-content-info-text">
                            <h5>{props.score_info}</h5>
                        </div>
                    </div>
                    <div className="performers-content-info">
                        <div className="performers-content-info-text">
                            <h5>{props.occupation}</h5>
                        </div>
                        <div className="performers-content-info-text">
                            <h5>{props.occupation_info}</h5>
                        </div>
                    </div>
                    <div className="performers-content-info">
                        <div className="performers-content-info-text">
                            <h5>{props.date}</h5>
                        </div>
                        <div className="performers-content-info-text">
                            <h5>{props.date_info}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    )
}

export default Performerspositions;