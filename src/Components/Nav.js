import { Link } from "@mui/material";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export default function Nav() {
  return (
    <Navbar className="nav">
      <Container>
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
        <span className="material-symbols-outlined">person</span>
        <span className="user">
          <h4>login/signup</h4>
        </span>
      </Container>
    </Navbar>
  );
}
