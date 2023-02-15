import { Link } from "@mui/material";
import Carousel from "react-bootstrap/Carousel";

const ImageOne = require("/Users/karynhuston/raise/front-end/raise-app/src/12821591_5043079.jpg");
const ImageTwo = require("/Users/karynhuston/raise/front-end/raise-app/src/Screen Shot 2023-02-12 at 8.01.06 PM.png");
const ImageThree = require("/Users/karynhuston/raise/front-end/raise-app/src/4990076_39936.jpg");

export default function Home() {
  return (
    <div className="container carosuel">
      <Carousel className="innerCarosuel">
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={ImageOne}
            alt="First slide"
            width="600"
            height="380"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={ImageTwo}
            alt="Second slide"
            width="600"
            height="380"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ImageThree}
            alt="Third slide"
            width="600"
            height="380"
          />
        </Carousel.Item>
      </Carousel>
      <section className="homeSection">
        <p>
          raise Is to connect parents and caregivers to an open discussion
          timeline with parenting questions and concerns. This app is ideal for
          new parents overwhelmed and experienced to connect with each other instantly. lorem ispum lorem ispum
         <Link
            href="/questions"
            // underline="none"
            variant="h4"
            sx={{
              fontFamily: "Ramaraja",
            }}
          >
            {"↣see open discussions"}
          </Link>
        </p>
      </section>
      <section className="homeSection-2">
        <p>
          Currently on this version of Raise we allow community moderation and
          restrictions. This means that anyone can report a post that is found
          harmful or toxic to this community. If a post is reported it may be
          deleted immediatley. Guests are also allowed to edit a post. We
          welcome all new parents and caregivers from all backgrounds to join
          and shape this community!
          <Link
            href="/questions"
            underline="none"
            variant="h4"
            sx={{
              fontFamily: "Ramaraja",
            }}
          >
            {"↣community guidelines"}
          </Link>
        </p>
      </section>
    </div>
  );
}
