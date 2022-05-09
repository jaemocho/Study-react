import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Login from '../components/Login';
import { Title } from '../MyCss';

const LoginPage = () => {
  return (
    <div>
      <Header />
      <Login />
      <div className="box-style">안녕</div>
      <Title>안녕</Title>
      <Footer />
    </div>
  );
};

export default LoginPage;
