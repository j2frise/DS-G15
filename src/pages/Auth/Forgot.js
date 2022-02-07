import React, {useEffect, useState} from "react";
import { Col, Row, Form, Card, Container, Alert,Button } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import { Routes } from "../../routes";


export default () => {

  useEffect(() => {
    
  }, []);

  return (
    <main>
      <section className="vh-100 d-flex align-items-center">
        <Container>
          <Col md="10" lg="4" className="m-auto">
              <h1>Forgot</h1>
              <Form className="mt-5">
                  <Form.Group className="mt-4 mb-2">
                    <Form.Label>Email</Form.Label>
                    <Form.Control required type="email" placeholder="johndoe@email.com" />
                  </Form.Group>

                  <Link to={Routes.Auth.path}>Sign in </Link> | <Link to={Routes.Register.path}>Sign up </Link>
                  <div className="mt-4 text-center">
                    <Button variant="primary" type="submit">send</Button>
                  </div>
              </Form>
          </Col>
        </Container>
      </section>
    </main>
  );
};
