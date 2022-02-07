
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCog, faEnvelopeOpen, faSearch, faSignOutAlt, faUserShield } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { Row, Col, Nav, Form, Image, Navbar, Dropdown, Container, ListGroup, InputGroup } from '@themesberg/react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { Routes } from "../routes";
import {publicClientApplication} from "../context/provider";
import { SessionContext, getSessionCookie, setSessionCookie } from "../context/session";
import {lang} from '../store/translation'
import Cookies from "js-cookie";
import France from "../assets/img/flags/france.svg";
import Germany from "../assets/img/flags/germany.svg";
import England from "../assets/img/flags/united-kingdom.svg";



export default (props) => {
  const history = useHistory();
  const [notifications, setNotifications] = useState([]);
  const [flag, setFlag] = useState("");

  const user = getSessionCookie().user;
  const flags = {
    FR: France, DE: Germany, EN: England
  }

  useEffect(()=> {
    setFlag(getSessionCookie().lang);
  }, [])

  const logout = () => {
    Cookies.remove("session");
    setSessionCookie({
      ...getSessionCookie(),
      lang: flag
    });
    const logoutRequest = {
      account: publicClientApplication().getAccountByUsername(user.email)
    };

    publicClientApplication().logout(logoutRequest);
    //history.push("/");
  };

  const markNotificationsAsRead = () => {
    setTimeout(() => {
      setNotifications(notifications.map(n => ({ ...n, read: true })));
    }, 300);
  };


  function swipLang(param){
    setSessionCookie({
      ...getSessionCookie(),
      lang: param
    });
    window.location.reload();
  }


  const Notification = (props) => {
    const { link, sender, time, message, read = false } = props;
    const readClassName = read ? "" : "text-danger";

    return (
      <ListGroup.Item action href={link} className="border-bottom border-light">
        <Row className="align-items-center">
          <Col className="ps-0 ms--2">
            <div className="d-flex justify-content-between align-items-center pl-3 pr-3">
              <div>
                <h4 className="h6 mb-0 text-small">{sender}</h4>
              </div>
              <div className="text-end">
                <small className={readClassName}>{time}</small>
              </div>
            </div>
            <p className="font-small mt-1 mb-0 pl-3 pr-3">{message}</p>
          </Col>
        </Row>
      </ListGroup.Item>
    );
  };

  const FlagSelect = () => {
    return (
      <div className="media d-flex align-items-center">
        <div className="media-body ms-2 text-dark align-items-center d-none d-lg-block">
          <Image src={flags[flag]} className="user-avatar xs-avatar rounded-circle me-2" /> 
        </div>
      </div>
    )
  }

  return (
    <Navbar variant="dark" expanded className="ps-0 pe-2 pb-0">
      <Container fluid className="px-0">
        <div className="d-flex justify-content-between w-100">
          <div className="d-flex align-items-center">
          
          </div>
          <Nav className="align-items-center">    
            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle as={Nav.Link} className="pt-1 px-0 me-3">
                <FlagSelect />
              </Dropdown.Toggle>
              <Dropdown.Menu className="user-dropdown dropdown-menu-right mt-2">
                <Dropdown.Item className={"fw-bold "+(flag == "FR" && "active")} onClick={()=>{swipLang("FR"); setFlag("FR")}}>
                  <Row>
                    <Col xs={3}>
                      <Image src={France} className="user-avatar xs-avatar rounded-circle me-1" /> 
                    </Col>
                    <Col xs={9}>Français</Col>
                  </Row>  
                </Dropdown.Item>
                {/*
                <Dropdown.Item className={"fw-bold "+(flag == "DE" && "active")} onClick={()=>{swipLang("DE"); setFlag("DE")}}>
                  <Row>
                    <Col xs={3}>
                      <Image src={Germany} className="user-avatar xs-avatar rounded-circle me-1" /> 
                    </Col>
                    <Col xs={9}>Deutschland</Col>
                  </Row>
                </Dropdown.Item>
                */}
                <Dropdown.Item className={"fw-bold "+(flag == "EN" && "active")} onClick={()=>{swipLang("EN"); setFlag("EN")}}>
                  <Row>
                    <Col xs={3}>
                      <Image src={England} className="user-avatar xs-avatar rounded-circle me-1" /> 
                    </Col>
                    <Col xs={9}>English</Col>
                  </Row>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle as={Nav.Link} className="pt-1 px-0">
                <div className="media d-flex align-items-center">
                  <div className="media-body ms-2 text-dark align-items-center d-none d-lg-block">
                    <span className="mb-0 font-small fw-bold">{user?user.displayName:""}</span>
                  </div>
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu className="user-dropdown dropdown-menu-right mt-2">
                <Dropdown.Item className="fw-bold">
                  <FontAwesomeIcon icon={faUserCircle} className="me-2" /> {user?user.email:""}
                </Dropdown.Item>

                <Dropdown.Divider />

                <Dropdown.Item className="fw-bold" as={Link} to={Routes.Auth.path} onClick={(e)=>{e.preventDefault();logout();}}>
                  <FontAwesomeIcon icon={faSignOutAlt} className="text-danger me-2" /> {lang("logout")}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
};
