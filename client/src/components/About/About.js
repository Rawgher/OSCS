import React from "react";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Card from "../../components/Card";
import TheTeam from "../../utils/TheTeam.json";
import "./About.css";
import Form from "../Form/Form";

class About extends React.Component {
  state = {
    TheTeam
  };

  render() {
    return (
      <Container id="EGA-aboutPageContainer">
        <Row>
          <Col size="md-12">
            <div id="EGA-aboutSite">
              <h1 id="EGA-aboutSiteTitle">About the Site</h1>
              <p>
                Programmers spend roughly 95% of their programming life
                searching for solutions to broken code. Our team set out to
                create a virtual environment that would assist in bringing that
                percentage down. <br />
                <br />
                <span className="EGA-orange">One Stop</span> Code Shop (OSCS) is
                a platform that lets users query coding related questions while
                leveraging powerful APIs. OSCS then prioritizes search results
                for you. <br />
                <br />
                In OSCS, the top most reliable knowledge bases such as Stack
                Overflow, Youtube, Amazon, and Bing are queried from a single
                search bar. Results are then automatically filtered and screened
                for the most useful criteria; including things such as response
                ratings, top views, relevant dates, and regex accuracy. <br />
                <br />
                Users will find answers from multiple sources quickly and
                without ever having to load new pages. <br />
                <br />
                With OSCS, our goal is to help deliver knowledge faster and more
                efficiently.
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col size="md-12">
            <h1 id="EGA-aboutTeamTitle">The Team</h1>
          </Col>
          {this.state.TheTeam.map(TheTeam => (
            <Col size="md-4 sm-4 xs-4">
              <div id="EGA-teamContainer">
                <div id="EGA-cardContainer">
                  <Card
                    id={TheTeam.id}
                    key={TheTeam.id}
                    image={TheTeam.image}
                    colorImage={TheTeam.colorImage}
                    name={TheTeam.name}
                    description={TheTeam.description}
                    githubURL={TheTeam.githubURL}
                    linkedInURL={TheTeam.linkedInURL}
                  />
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <Row>
          <Col size="md-12 sm-12 xs-12">
            <h1 id="EGA-aboutTeamContactTitle">Ask us a question!</h1>
            <Form />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default About;
