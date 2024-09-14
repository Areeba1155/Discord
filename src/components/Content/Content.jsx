import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js'; // Import Typed.js
import { Container, Row, Col } from 'react-bootstrap';
import './Content.css';
import logo from '../../assets/contentimg.png'

const Content = () => {
  const typedElement = useRef(null); // Use ref to point to the h1 element

  useEffect(() => {
    const options = {
      strings: ["Connect, Share, and Chat Freely with StreamNest"],
      typeSpeed: 150,
      loop: true,
    };

    const typed = new Typed(typedElement.current, options);

    // Cleanup the effect when component unmounts
    return () => {
      typed.destroy();
    };
  }, []);

  const headingFont = {
    fontFamily: 'Inter, sans-serif',
  };
  return (
    <>
      <div className="container-fluid content text-white pt-10 vh-auto pb-5">
        <Row className="sm:flex items-center justify-center ml-10 pt-10">
          <Col md={6} className="sm:flex items-center flex-col p-3 max-sm:ml-10 ">
            <h5 className="fade-in display-10 fw-bold items-center justify-center text-uppercase mb-4 w-[280px]" style={headingFont}>
            <span ref={typedElement}></span></h5>
            <p className="slide-in lead text-align-justify w-[260px]" style={{ fontSize: '20px' }}>
  StreamNest lets you create your own chat channels, share messages, and post images seamlessly, just like your favorite apps. Join the conversation and stay connected with ease.
</p>

          </Col>
          <Col md={6}>
            <img
            src={logo}
              alt="Background Art"
              className="img-fluid bounce"
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Content;
