import { Link } from "@mui/material";

export default function Nav() {
  return (
    <nav>
      <Link
        className="home"
        href="/"
        underline="none"
        variant="h4"
        sx={{
          fontFamily: "Quicksand",
        }}
      >
        {" "}
        <span className="home">Home</span>{" "}
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
        color=" rgb(45,155,241)"
        href="/questions"
        text-align="center"
        underline="none"
        variant="h3"
        sx={{
          fontFamily: "PT Serif",
        }}
      >
        {"raising children"}
      </Link>
      <Link
        className="parentingTips"
        color=" rgb(45,155,241)"
        href="/questions"
        text-align="center"
        underline="none"
        variant="h3"
        sx={{
          fontFamily: "PT Serif",
        }}
      >
        {"lorem ispum"}
      </Link>
      <span className="material-symbols-outlined userLink">
        {"login"}
        {"person"}
      </span>
    </nav>
  );
}
