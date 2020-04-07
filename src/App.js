import React from "react";
import { chunk } from "lodash";
import { CookiesProvider } from "react-cookie";
import { Container, Row, Col, useScreenClass } from "react-grid-system";
import CookieBanner from "react-cookie-banner";

import "./App.css";
import tools from "./tools";
import Tool from "./Tool";

function App() {
  const screenClass = useScreenClass();
  let chunkValue = 2;
  switch (screenClass) {
    case "xs":
    case "sm":
      chunkValue = 4;
      break;
    case "md":
    case "lg":
    case "xl":
      chunkValue = 6;
      break;

    default:
      break;
  }
  return (
    <CookiesProvider>
      <CookieBanner
          message="Yes, we use cookies."
          cookie="ac-counter-accepted-cookies"
        />
      <div className="App">
        <Container>
          <header>
            <h1>Animal Crossing Tools Counter</h1>
          </header>
          {chunk(tools, chunkValue).map((toolsRow) => (
            <Row>
              {toolsRow.map((tool) => (
                <Col md={2} xs={3}>
                  <Tool {...tool} />
                </Col>
              ))}
            </Row>
          ))}
        </Container>
        
      </div>
    </CookiesProvider>
  );
}

export default App;
