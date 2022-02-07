
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Card, Image, Button, Container } from '@themesberg/react-bootstrap';

import { Link } from 'react-router-dom';

import { Routes } from "../../routes";
import NotFoundImage from "../../assets/img/404.svg";


export default () => {
  return (
    <main>
      <section className="vh-100 d-flex align-items-center justify-content-center">
        <Container>
          <Row>
            <Col xs={12} className="text-center d-flex align-items-center justify-content-center">
              <div>
                <Card.Link as={Link} to={Routes.Auth.path}>
                  <Image src={NotFoundImage} className="img-fluid w-75" />
                </Card.Link>
                <p className="lead my-4">
                  Oups ! Il semble que vous ayez suivi un mauvais lien.
                </p>
                <Button as={Link} variant="info" className="animate-hover" to={Routes.Auth.path}>
                  <FontAwesomeIcon icon={faChevronLeft} className="animate-left-3 me-3 ms-2" />
                  Retour à l'accueil
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};
