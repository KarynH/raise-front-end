import { Link } from "@mui/material"

import  Navbar  from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export default function Nav() {

  return (

    <Navbar>
      <Container>
     <Link href="/questions" underline="none" variant="h2"    sx={{
        fontFamily: 'Ramaraja',
      }}>{'raise'}</Link>
      </Container>
    </Navbar>
   
  );
}