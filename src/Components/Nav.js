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
        href="/questions"
        underline="none"
        variant="h3"
        sx={{
          fontFamily: "Ramaraja",
        }}
      >
        {"parenting tips"}
      </Link>
      <span className="material-symbols-outlined userLink">
        {"login"}
        {"person"}
      </span>
    </nav>
  );
}
