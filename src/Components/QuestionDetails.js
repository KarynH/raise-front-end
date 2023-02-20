import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { Link } from "@mui/material";

export default function QuestionDetails() {
  const API = process.env.REACT_APP_API_URL;

  const { navigate } = useNavigate();
  const { id } = useParams();
  const [answers, setAnswers] = useState([]);
 
 const [responses, setResponses] = useState([
    'that is a really great idea. i would not spend $30 for cloth diapers!',
    'no way thats a beautiful idea',
    'awesome days ahead for you and your little one'
  ]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios.get(`${API}/questions/${id}`).then((res) => {
      console.log(res.data);
      setAnswers(res.data.allAnswers);
    });
  }, [API, id]);

  const formatDate = () => {
    return new Date().toLocaleDateString("en-us", {
      month: "short",
      weekday: "short",
      day: "numeric",
    });
  };

  // const childAge = answers
  //   .filter((answer) => answer.child_age != null)
  //   .map((answer) => answer.child_age);

  // const getQuestionBody = answers
  //   .filter((answer) => answer.body != null)
  //   .map((answer) => answer.body);

  const handleDeletion = () => {
    axios
      .delete(`${API}/questions/${id}`)
      .then(
        () => {
          navigate(`/questions`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  return (
    <div className="showBody">
      <div className="container cardDetails">
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          className="modalWindow"
        >
          <Modal.Header closeButton>
            <Modal.Title>Reports and Changes</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modalCRUD">
            Raise suggests that for any posts by others that you may find
            innapropiate, dangerous or that you may believe does not align with
            the purpose of Raise should be deleted by it's users. Or If you are
            the creator of this post and would like to edit this post feel free
            to do so.
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleClose}>Close</Button>
            <Button>
              {" "}
              <Link
                underline="none"
                href={`/questions/${id}/edit`}
                color="white"
              >
                Edit{" "}
              </Link>
            </Button>
            <Button onClick={handleDeletion}>Delete</Button>
          </Modal.Footer>
        </Modal>
        <Card className="responseMain">
          <Card.Header>
            <Nav>
              <Nav.Item></Nav.Item>
              <button className="showModalButton" onClick={handleShow}>
                <span className="harmfulDeletion">report/edit</span>
              </button>
            </Nav>
          </Card.Header>
          <Card.Body>
            <Card.Title className="questionTopic">
              {/* stages:{childAge[0]} */}
            </Card.Title>
            <Card.Text className="questionBodyShow">
              {/* {getQuestionBody[0]} */}
            </Card.Text>
          </Card.Body>
        </Card>
        {responses.map((response,index) => {
          return (
            <div className="responseCards">
              <Card key={index}>
                <Card.Body classname="responseCard">
                  <p className="responseDetails">
                  providerType: date: 🗓
                  </p>
                  {response}
                </Card.Body>
              </Card>
            </div>
          );
        })}
        <div className="container navigationLink">
          <Link underline="none" className="backLink" href={`/questions`}>
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}
