import React, {useEffect, useState} from "react";
import { Col, Row, Form, Card, Container, Alert, Button } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import { Routes } from "../../routes";
import { Login } from "../../components/Forms";

export default () => {

  useEffect(() => {
    
  }, []);

  return (
    <main>
      <section className="vh-100 d-flex align-items-center">
        <Container>
          <Col md="10" lg="4" className="m-auto">
              <Login />
          </Col>
        </Container>
      </section>
    </main>
  );
};
