import { Link } from "@mui/material";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import Stack from "@mui/material/Stack";

export default function Nav() {
  return (
    <Navbar className="nav">
      <Container>
        <Link
          href="/questions"
          underline="none"
          variant="h2"
          sx={{
            fontFamily: "Ramaraja",
          }}
        >
          {"raise"}
        </Link>
        <Stack direction="row" spacing={2}></Stack>
      </Container>
    </Navbar>
  );
}
