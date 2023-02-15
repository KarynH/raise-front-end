import Question from "./Question";
import axios from "axios";

import { useEffect, useState } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

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
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={props.onHide}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <>
      <div className="index">
        <h3 className="headingRecent">recent</h3>
        <Button
          variant="light"
          className="modalButton"
          onClick={() => setModalShow(true)}
        >
          Create a post
        </Button>

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
      {questions.map((question) => {
        return <Question key={question.id} question={question} />;
      })}
    </>
  );
}
