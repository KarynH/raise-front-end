import Question from "./Question";
import axios from "axios";

import { useEffect, useState } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

export default function Questions() {
  const API = process.env.REACT_APP_API_URL;
  const [questions, setQuestions] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    axios
      .get(`${API}questions`)
      .then((res) => {
        console.log(res.data);
        setQuestions(res.data);
      })
      .catch((err) => console.err);
  }, [API]);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Ask a question
          </Modal.Title>
        </Modal.Header>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Enter name" />
            <Form.Control type="text" placeholder="type something..." />
            <Form.Select aria-label="Default select example">
              <option className="category">Category</option>
              <option value="1">Lifestyle</option>
              <option value="2">New parenting</option>
              <option value="3">Feeling thoughtful</option>
              <option value="4">Products</option>
              <option value="5">Mental health</option>
              <option value="6">Information resources</option>
              <option value="7">Finances</option>
            </Form.Select>
          </Form.Group>
        </Form>
        <Modal.Footer>
          <Button variant="light" onClick={props.onHide}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <> {/**index title and button for modal screen, the modal function is returned with a property and the function used to set the modal to true*/ }
      <div className="index">
        <h3 className="headingRecent">recent</h3>
        <Button
          variant="light"
          className="modalButton"
          onClick={() => setModalShow(true)}
        >
          Ask a question
        </Button>

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div> {/*after the div for "recent" posts and modal we iterate over the data for the questions. apart of the index page. We return the componenet question. each question has a key and property to reference a value in the data*/}
      {questions.map((question) => {
        return <Question key={question.id} question={question} />;
      })}
    </>
  );
}
