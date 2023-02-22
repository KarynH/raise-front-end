import axios from "axios";

import Answers from "./Answers";

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { Link } from "@mui/material";

export default function QuestionDetails() {
  const API = process.env.REACT_APP_API_URL;

  let navigate = useNavigate();
  const { id } = useParams();

  const [question, setQuestions] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios
      .get(`${API}/questions/${id}`)
      .then((res) => {
        console.log(res.data);
        setQuestions(res.data);
      })
      .catch((c) => {
        console.warn("catch", c);
      });
  }, [id, API]);

  const formatDate = () => {
    return new Date().toLocaleDateString("en-us", {
      month: "short",
      weekday: "short",
      day: "numeric",
    });
  };

  const refreshPage = () => {
    window.location.reload(false);
  };

  const handleDeletion = () => {
    axios
      .delete(`${API}/questions/${id}`)
      .then(
        () => {
          navigate(`questions`);
          refreshPage();
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
              stages: {question.child_age}, {question.name}
            </Card.Title>
            <Card.Text className="questionBodyShow">{question.body}</Card.Text>
          </Card.Body>
        </Card>

        <>
          <Answers formatDate={formatDate} refreshPage={refreshPage} />
        </>

        <div className="container navigationLink">
          <Link underline="none" className="backLink" href={`/questions`}>
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}
