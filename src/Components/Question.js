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
      <Link
        underline="none"
        className="showLink"
        href={`/questions/${question.id}/answers`}
      >
        <Card>
          <Card.Header className="cardHeader">
            <span className="questionName">{question.name}</span>
            <span className="questionTopic">{question.topic}</span>
            <span className="questionAge">stages:{question.child_age}</span>
            <span className="headerDate">
              <p>🗓{formatDate(question.todays_date)}</p>
            </span>{" "}
          </Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-2">
              <p className="questionBody"> {question.body} </p>
              <footer className="commentTab">
                {/* <Link
                href="/questions"
                underline="none"
                variant="h5"
                sx={{
                  fontFamily: "Ramaraja",
                }}
              >
                comments
              </Link> */}
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}
