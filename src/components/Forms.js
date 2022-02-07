
import React, {useEffect, useState} from "react";
import { Form, Alert, Button } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import { Routes } from "../routes";

export const Login = () => {
  const [sendValue, setSendValue] = useState({})
  const [display, setDisplay] = useState({message:null, type:null});

  const defaultData =  {
    "email": null,
    "password": null
  }
  function handleChange(e){

    let value = e.target.value
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

  }

  return (
    <>
      <h1>Sign in</h1>
      <Form onSubmit={async (e)=>{login(e)}} className="mt-5">
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
            <Button variant="primary" type="submit">sign in</Button>
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

  const defaultData =  {
    "email": null,
    "password": null,
    "confirm": null
  }
  function handleChange(e){

    let value = e.target.value
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
    
  }

  return (
    <>
      <h1>Sign up</h1>
      <Form onSubmit={async (e)=>{register(e)}} className="mt-5">
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
            <Link to={Routes.Auth.path}>I want to sign in</Link>
          </div>
      </Form>
    </>
  );
};

export const Forgot = () => {
  const [sendValue, setSendValue] = useState({})
  const [display, setDisplay] = useState({message:null, type:null});

  const defaultData =  {
    "email": null  
  }
  function handleChange(e){

    let value = e.target.value
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
    
  }
  
  return (
    <>
      <h1>Forgot</h1>
      <Form onSubmit={async (e)=>{forgot(e)}} className="mt-5">
          <Form.Group className="mt-4 mb-2">
            <Form.Label>Email</Form.Label>
            <Form.Control required type="email" name="email" onChange={(e)=>{handleChange(e)}} placeholder="johndoe@email.com" />
          </Form.Group>

          <Link to={Routes.Auth.path}>Sign in </Link> | <Link to={Routes.Register.path}>Sign up </Link>
          <div className="mt-4 text-center">
            <Button variant="primary" type="submit">send</Button>
          </div>
      </Form>
    </>
  );
};

