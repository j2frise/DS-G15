import React, {useEffect, useState} from "react";
import { Col, Row, Form, Card, Container, Alert, Button } from '@themesberg/react-bootstrap';
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
              <h1>Sign up</h1>
              <Form className="mt-5">
                  <Form.Group className="mt-4 mb-2">
                    <Form.Label>Email</Form.Label>
                    <Form.Control required type="email" placeholder="johndoe@email.com" />
                  </Form.Group>

                  <Form.Group className="mt-4 mb-2">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required type="password" placeholder="**********" />
                  </Form.Group>

                  <Form.Group className="mt-4 mb-2">
                    <Form.Label>Password confirmation</Form.Label>
                    <Form.Control required type="password" placeholder="**********" />
                  </Form.Group>

                  <div className="mt-4 text-center">
                    <Button variant="primary" type="submit">sign up</Button>
                  </div>
                  <div className="mt-3 text-center">
                    <Link to={Routes.Auth.path}>I want to sign in</Link>
                  </div>
              </Form>
          </Col>
        </Container>
      </section>
    </main>
  );
};
