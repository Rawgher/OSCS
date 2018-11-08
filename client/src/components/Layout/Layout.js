import React from "react";
import "./Layout.css";
import NavTabs from "../Nav";
import background from "../../images/background.png";
import { Col, Row, Container } from "../Grid";
import Sidebar from "../SearchBar";
import Chat from "../../components/Chat";

class Layout extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col size="md-12">
              <NavTabs />
              <Sidebar />
              <div className="EGA-background-image">
                <img
                  src={background}
                  className="EGA-stretch"
                  alt="Grey Background"
                />
              </div>
              {children}
              <Chat />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Layout;
