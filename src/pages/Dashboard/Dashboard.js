import React, {useEffect, useState} from "react";
import { Col, Row, Form, Card, Container, Alert, Button } from '@themesberg/react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { Routes } from "../../routes";
import { getUserConnect, users } from "../../data/Users";
import { setSession, getSession } from "../../context/session";


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
            <Col sm="9">Welcome <strong>{getUserConnect().email}</strong></Col>
            <Col sm="3">
              <Button variant="danger" className="btn-xs" onClick={logout}>Lougout</Button>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};
