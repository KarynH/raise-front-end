import Card from "react-bootstrap/Card";

import { Link } from "@mui/material";

export default function Question({ question }) {
  const formatDate = () => {
    return new Date(question.todays_date).toLocaleDateString("en-us", {
      month: "short",
      weekday: "short",
      day: "numeric",
    });
  };

  return (
    <div className="container feed">
      <Card>
        <Card.Header className="cardHeader">
          <span className="questionName">{question.name}</span>
          <span className="headerDate">
            {formatDate(question.todays_date)}
          </span>{" "}
          <span className="questionTopic">{question.topic}</span>
        </Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-2">
            <p className="questionBody"> {question.body} </p>
            <footer className="commentTab">
              <Link
                href="/questions"
                // underline="none"
                variant="h5"
                sx={{
                  fontFamily: "Ramaraja",
                }}
              >
                6 Comments
              </Link>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
}
