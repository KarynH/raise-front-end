import { Link } from "@mui/material";
const ImageOne = require("/Users/karynhuston/raise/front-end/raise-app/src/12821591_5043079.jpg");
const ImageTwo = require("/Users/karynhuston/raise/front-end/raise-app/src/Screen Shot 2023-02-12 at 8.01.06 PM.png");
const ImageThree = require("/Users/karynhuston/raise/front-end/raise-app/src/4990076_39936.jpg");

export default function Home() {
  return (
    <div className="container image-box">
      <div className="slider">
        <span id="slide-1"></span>
        <span id="slide-2"></span>
        <span id="slide-3"></span>
        <div className="image-container">
          <img
            src={ImageOne}
            className="parenting"
            alt="parenting"
            width="500"
            height="300"
          />
          <img
            src={ImageTwo}
            className="slide"
            alt="family-illustration"
            width="500"
            height="300"
          />
          <img
            src={ImageThree}
            className="slide"
            alt="family-holding-newborn"
            width="500"
            height="300"
          />
        </div>
        <div className="buttons">
          <a href="#slide-1">🔘</a>
          <a href="#slide-2">🔘</a>
          <a href="#slide-3">🔘</a>
        </div>
      </div>
      <section className="homeSection">
        <p>
          raise Is to connect parents and caregivers to an open discussion
          timeline with parenting questions and concerns. This app is ideal for
          new parents overwhelmed and experienced to connect with each other
          instantly.{" "}
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
          and shape this community! eros scelerisque posuere. Quisque elit urna,
          scelerisque quis faucibus sed, gravida eget ante. Phasellus hendrerit
          vitae eros in ullamcorper. Suspendisse hendrerit purus sed risus vitae eros i
          read about the future of raise.
          <Link
            href="/questions"
            underline="none"
            variant="h4"
            sx={{
              fontFamily: "Ramaraja",
            }}
          >
            {"↣see open discussions"}
          </Link>
        </p>
      </section>
    </div>
  );
}
