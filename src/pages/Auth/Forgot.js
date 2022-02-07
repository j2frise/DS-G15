import React, {useEffect, useState} from "react";
import { Col, Container } from '@themesberg/react-bootstrap';
import { Forgot } from "../../components/Forms";


export default () => {

  return (
    <main>
      <section className="vh-100 d-flex align-items-center">
        <Container>
          <Col md="10" lg="4" className="m-auto">
             <Forgot />
          </Col>
        </Container>
      </section>
    </main>
  );
};
