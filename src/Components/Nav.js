import { Link } from "@mui/material";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Nav() {
  return (
    <nav className="nav">
      {/* <div className="navContent">
      <Link
        className="home"
        href="/"
        underline="none"
        variant="h4"
        sx={{
          fontFamily: "Ramaraja",
        }}
      >
        {" "}
        <span className="material-symbols-outlined home">Home</span>{" "}
      </Link>
     
        <Link
          className="raiseLogo"
          href="/questions"
          underline="none"
          variant="h3"
          sx={{
            fontFamily: "Ramaraja",
          }}
        >
          {"raise"}
        </Link>
        <Link
        className="parentingTips"
          href="/questions"
          underline="none"
          variant="h4"
          sx={{
            fontFamily: "Ramaraja",
          }}
        >
          {"parenting tips"}
        </Link>
          <span className="material-symbols-outlined userLink">person</span>
      </div> */}
      <Container>
        <Row>
          <Col lg={1}>
            <Link
              className="raiseLogo"
              href="/questions"
              underline="none"
              variant="h3"
              sx={{
                fontFamily: "Ramaraja",
              }}
            >
              {"raise"}
            </Link>
            </Col>
          <Col sm={2}>
          <Link
              className="raiseLogo"
              href="/questions"
              underline="none"
              variant="h4"
              sx={{
                fontFamily: "Ramaraja",
              }}
            >
              {"open discussions"}
            </Link>
          </Col>
          <Col lg={4}>
            <Link
              className="parentingTips"
              href="/questions"
              underline="none"
              variant="h4"
              sx={{
                fontFamily: "Ramaraja",
              }}
            >
              {"parenting tips"}
            </Link>
          </Col>

          <Col xs={1}><span className="material-symbols-outlined userLink">person</span>
</Col>
        </Row>
      </Container>
    </nav>
  );
}
