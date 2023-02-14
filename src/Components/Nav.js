import { Link } from "@mui/material";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export default function Nav() {
  return (
    <Navbar className="nav">
      <Container>
        <Link
          href="/"
          underline="none"
          variant="h4"
          sx={{
            fontFamily: "Ramaraja",
          }}
        >
          {" "}
          <span className="material-symbols-outlined">Home</span>{" "}
        </Link>
        <Link
          href="/questions"
          underline="none"
          variant="h4"
          sx={{
            fontFamily: "Ramaraja",
          }}
        >
          {"raise"}
        </Link>

        <span className="user">
          <span className="material-symbols-outlined">person</span>
          <h4>login/signup</h4>
        </span>
      </Container>
    </Navbar>
  );
}
