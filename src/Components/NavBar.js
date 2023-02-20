import { Link } from "@mui/material";

export default function NavBar() {
  return (
    <nav>
      <Link
        className="home"
        href="/"
        underline="always"
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
        underline="always"
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
        text-align="center"
        underline="always"
        variant="h5"
        sx={{
          fontFamily: "PT Serif",
        }}
      >
        {"raising children"}
      </Link>
      <Link
        className="parentingTips"
       
        href="/questions"
        text-align="center"
        underline="always"
        variant="h5"
        sx={{
          fontFamily: "PT Serif",
        }}
      >
        {"community guidelines"}
      </Link>
      <span className="material-symbols-outlined userLink">
        {"person"} 
      </span>
</nav>

  );
}
