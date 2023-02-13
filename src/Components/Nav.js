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
        <span class="material-symbols-outlined">person</span>
        <span class="user"><h4>login/signup</h4></span>
{/* 
        <Stack direction="row" spacing={2}></Stack> */}
      </Container>
    </Navbar>
  );
}
