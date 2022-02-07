import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Card, Image, Button, Container } from '@themesberg/react-bootstrap';
import offline from '../assets/img/offline.svg'

export default (props) => {
    const $offline = document.querySelector(".offline")
    return (
        <div className="offline hide">
            <section className="vh-100 d-flex align-items-center justify-content-center">
                <Container>
                <Row>
                    <Col xs={12} className="text-center d-flex align-items-center justify-content-center">
                    <div>
                        <Image src={offline} className="img-fluid" />
                        <p className="lead my-4">
                            Oups ! Il semble que l'api référentiel soit hors service. <br/> 
                            Veuillez contacter les administraturs KS
                        </p>
                        <Button variant="info" className="animate-hover" onClick={()=>{document.location.reload();}}>
                            <FontAwesomeIcon icon={faChevronLeft} className="animate-left-3 me-3 ms-2" />
                            Réessayez
                        </Button>
                    </div>
                    </Col>
                </Row>
                </Container>
            </section>
        </div>
    );
  }