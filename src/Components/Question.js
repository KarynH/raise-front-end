import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { Link } from "@mui/material";

export default function Question({ question }) {
  return (
    <div className="container feed">
      <Card>
        <Card.Header className="cardHeader">
          <span className="questionName">{question.name}</span>
          <span className="headerDate">{question.todays_date}</span>{" "}
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
