import React, {useEffect, useState} from "react";
import { Col, Row, Form, Card, Container, Alert, Button } from '@themesberg/react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { Routes } from "../../routes";
import { getUserConnect, users } from "../../data/Users";
import { setSession, getSession } from "../../context/session";
import { ResetPassword } from "../../components/Forms";


export default () => {
  const history = useHistory();
  const usersList =  users();
  useEffect(() => {
    
  }, []);
  
function logout(){
  setSession({
    ...getSession(),
    id: null,
    login: false
  })
  history.push(Routes.Auth.path);
}


  return (
    <main>
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          <Row>
            <Col sm="7" className="mt-3">Welcome <strong>{getUserConnect().email}</strong></Col>
            <Col sm="2" className="mt-3">
              <Link to={Routes.Components.path}>Components list</Link>
            </Col>
            <Col sm="3" className="mt-3">
              <Button variant="danger" className="btn-xs" onClick={logout}>Lougout</Button>
            </Col>
          </Row>

          <Card className="mt-5 py-4">
            <Row>
              <Col md="8"></Col>
              <Col md="4">
                <ResetPassword />
              </Col>
            </Row>
          </Card>
        </Container>
      </section>
    </main>
  );
};
