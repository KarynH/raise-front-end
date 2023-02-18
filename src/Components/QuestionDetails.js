import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";

import  {Link}  from "@mui/material";
export default function QuestionDetails() {
  const API = process.env.REACT_APP_API_URL;

  const { id } = useParams();
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    axios.get(`${API}questions/${id}/answers`).then((res) => {
      console.log(res.data);
      setAnswers(res.data);
    });
  }, [API, id]);




  // const childAge = answers[0].child_age;

  return (
    <div className="container cardDetails">
      <Card>
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey="#first">
            <Nav.Item>
              <Nav.Link href="#first">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#link">Edit</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#delete">Delete</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <Card.Title className="questionTopic ">stages:</Card.Title>
          <Card.Text className="questionBody"></Card.Text>
        </Card.Body>
      </Card>
      {answers.map((answer) => {
        return (
          <div className="responseCards">
            <Card>
              <Card.Body classname="responseCard">
                <p className="responseDetails">
             {answer.provider_type} {answer.todays_date}
                </p>
                {answer.response}
              </Card.Body>
            </Card>
          </div>
        );
      })}
         <Link
        underline="none"
        className="backLink"
        href={`/questions`}
      >Back</Link>
    </div>
  );
}
