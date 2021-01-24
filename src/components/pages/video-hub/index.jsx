import React from "react";
import { Navbar, Row, Image } from "react-bootstrap";

export const VideoHub = () => {
  return (
    <>
      <header>
          <Navbar bg="light">
            <Navbar.Brand onClick={() => {}} style={{color: "blue"}}>
              <Image />
              VideoHub
            </Navbar.Brand>
            
          </Navbar>
      </header>
      <main>
      <Row></Row>
      </main>
    </>
  );
};
