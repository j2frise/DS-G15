
import React, {useEffect, useState} from "react";
import { Form, Alert, Button } from '@themesberg/react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { Routes } from "../routes";
import {signin,signup, forgotemail} from "../data/Users"
import { setSession,getSession } from "../context/session";

export const Login = () => {
  const [sendValue, setSendValue] = useState({})
  const [display, setDisplay] = useState({message:null, type:null});
  const history = useHistory();

  const defaultData =  {
    "email": null,
    "password": null
  }
  function handleChange(e){

    let value = e.target.value.trim()
    let stateField = e.target.name
    setSendValue({
      ...sendValue,
      [stateField]: value?value:null
    })
  }

  function login(e){
    e.preventDefault();
    send();
  }

  function send(){
    let nb = 0;
    for (const key in sendValue) {
      if (Object.hasOwnProperty.call(sendValue, key)) {
        const element = sendValue[key];
        if(!element){
          nb++;
        }
      }
    }

    if(nb > 0){
      setDisplay({
        message: "Veuillez remplir tous les champs",
        type: "danger"
      })
    }
    else {
      const req = signin(sendValue);
      if(typeof req == "number"){
        setSession({
          ...getSession(),
          login: true,
          id: req
        })
        history.push(Routes.Dashboard.path);
      } else {
        setDisplay({
          message: req,
          type: "danger"
        })
      }
    }
  }

  return (
    <>
      <h1>Sign in</h1>
      <Form onSubmit={async (e)=>{login(e)}} className="mt-5">
          {display.message && display.type &&
            <Form.Group className="mt-4 mb-2">
              <Alert variant={display.type}>{display.message}</Alert>
            </Form.Group>
          }

          <Form.Group className="mt-4 mb-2">
            <Form.Label>Email</Form.Label>
            <Form.Control required type="email" name="email" onChange={(e)=>{handleChange(e)}} placeholder="johndoe@email.com" />
          </Form.Group>

          <Form.Group className="mt-4 mb-2">
            <Form.Label>Password</Form.Label>
            <Form.Control required type="password" name="password" onChange={(e)=>{handleChange(e)}} placeholder="**********" />
          </Form.Group>
          
          <Link to={Routes.Forgot.path}>Forgot password ?</Link>
          <div className="mt-4 text-center">
            <Button className="col-12 col-md-5" variant="primary" type="submit">sign in</Button>
          </div>
          <div className="mt-3 text-center">
            <Link to={Routes.Register.path}>I want to sign up</Link>
          </div>
      </Form>
    </>
  );
};

export const Register = () => {
  const [sendValue, setSendValue] = useState({})
  const [display, setDisplay] = useState({message:null, type:null});
  const history = useHistory();

  const defaultData =  {
    "email": null,
    "password": null,
    "confirm": null
  }
  function handleChange(e){

    let value = e.target.value.trim()
    let stateField = e.target.name
    setSendValue({
      ...sendValue,
      [stateField]: value?value:null
    })
  }

  function register(e){
    e.preventDefault();
    send();
  }

  function send(){
    let nb = 0;
    for (const key in sendValue) {
      if (Object.hasOwnProperty.call(sendValue, key)) {
        const element = sendValue[key];
        if(!element){
          nb++;
        }
      }
    }

    if(nb > 0){
      setDisplay({
        message: "Veuillez remplir tous les champs",
        type: "danger"
      })
    }
    else {
      if(sendValue.password != sendValue.confirm){
        setDisplay({
          message: "Les mots de passe doivent être identiques",
          type: "danger"
        })
      } else {
        const req = signup({email: sendValue.email, password: sendValue.password});
        if(req == "success"){
          setDisplay({
            message: "Compte créé avec succès",
            type: "success"
          })
          setTimeout(() => {
            history.push(Routes.Auth.path);
          }, 3000);
        } else {
          setDisplay({
            message: req,
            type: "danger"
          })
        }
      }
    }
  }

  return (
    <>
      <h1>Sign up</h1>
      <Form onSubmit={async (e)=>{register(e)}} className="mt-5">
          {display.message && display.type &&
            <Form.Group className="mt-4 mb-2">
              <Alert variant={display.type}>{display.message}</Alert>
            </Form.Group>
          }

          <Form.Group className="mt-4 mb-2">
            <Form.Label>Email</Form.Label>
            <Form.Control required type="email" name="email" onChange={(e)=>{handleChange(e)}} placeholder="johndoe@email.com" />
          </Form.Group>

          <Form.Group className="mt-4 mb-2">
            <Form.Label>Password</Form.Label>
            <Form.Control required type="password" name="password" onChange={(e)=>{handleChange(e)}} placeholder="**********" />
          </Form.Group>

          <Form.Group className="mt-4 mb-2">
            <Form.Label>Password confirmation</Form.Label>
            <Form.Control required type="password" name="confirm" onChange={(e)=>{handleChange(e)}} placeholder="**********" />
          </Form.Group>

          <div className="mt-4 text-center">
            <Button variant="primary" type="submit">sign up</Button>
          </div>
          <div className="mt-3 text-center">
            <Link  className="col-12 col-md-5" to={Routes.Auth.path}>I want to sign in</Link>
          </div>
      </Form>
    </>
  );
};

export const Forgot = () => {
  const [sendValue, setSendValue] = useState({})
  const [display, setDisplay] = useState({message:null, type:null});
  const history = useHistory();

  const defaultData =  {
    "email": null  
  }
  function handleChange(e){

    let value = e.target.value.trim()
    let stateField = e.target.name
    setSendValue({
      ...sendValue,
      [stateField]: value?value:null
    })
  }

  function forgot(e){
    e.preventDefault();
    send();
  }

  function send(){
    let nb = 0;
     for (const key in sendValue) {
      if (Object.hasOwnProperty.call(sendValue, key)) {
        const element = sendValue[key];
        if(!element){
          nb++;
        }
      }
    }
    
    if(nb > 0){
      setDisplay({
        message: "Veuillez remplir tous les champs",
        type: "danger"
      })
    }
    else {
      const req = forgotemail(sendValue);
      if(req == "success"){
        setDisplay({
          message: "Mot de passe réinitialisé en 1234",
          type: "success"
        })
        setTimeout(() => {
          history.push(Routes.Auth.path);
        }, 3000);      } else {
        setDisplay({
          message: req,
          type: "danger"
        })
      }
    }
  }
  
  return (
    <>
      <h1>Forgot</h1>
      <Form onSubmit={async (e)=>{forgot(e)}} className="mt-5">
          {display.message && display.type &&
            <Form.Group className="mt-4 mb-2">
              <Alert variant={display.type}>{display.message}</Alert>
            </Form.Group>
          }

          <Form.Group className="mt-4 mb-2">
            <Form.Label>Email</Form.Label>
            <Form.Control required type="email" name="email" onChange={(e)=>{handleChange(e)}} placeholder="johndoe@email.com" />
          </Form.Group>

          <Link to={Routes.Auth.path}>Sign in </Link> | <Link to={Routes.Register.path}>Sign up </Link>
          <div className="mt-4 text-center">
            <Button className="col-12 col-md-5" variant="primary" type="submit">send</Button>
          </div>
      </Form>
    </>
  );
};

