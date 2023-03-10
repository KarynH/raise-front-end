import Question from "./Question";

import axios from "axios";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

export default function Questions() {
  const API = process.env.REACT_APP_API_URL;

  const [questions, setQuestions] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newForm, setNewForm] = useState({
    body: "",
    name: "",
    todays_date: "",
    topic: "",
    child_age: "",
  });

  useEffect(() => {
    axios
      .get(`${API}/questions`)
      .then((res) => {
        console.log(res.data);
        setQuestions(res.data);
      })
      .catch((err) => console.err);
  }, [API]);

  const handleTextChange = (event) => {
    setNewForm({ ...newForm, [event.target.id]: event.target.value });
  };

  const handleSelectChange = (event) => {
    setNewForm({ ...newForm, [event.target.id]: event.target.value });
  };

  const navigate = useNavigate();

  const refreshPage = () => {
    window.location.reload(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${API}/questions`, newForm)
      .then(() => {
        navigate(`/questions`);
        setNewForm(" ");
        refreshPage();
      })
      .catch((error) => console.error("catch", error));
  };

  return (
    <>
      <div className="index">
        <h3 className="headingRecent">recent</h3>

        <Button className="modalButton" variant="primary" onClick={handleShow}>
          Ask a question
        </Button>

        <Modal
          show={show}
          onHide={handleClose}
          className="modalWindow"
          id="contained-modal-title-vcenter"
        >
          <Modal.Header></Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit} type="submit">
              <Form.Group className="mb-3" controlId="name">
                <Form.Label className="formName">Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  autoFocus
                  value={newForm.name}
                  onChange={handleTextChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="body">
                <Form.Label className="formBody">Type anything</Form.Label>
                <Form.Control
                  // as="textarea"

                  type="text"
                  placeholder="..."
                  name="body"
                  autoFocus
                  value={newForm.body}
                  onChange={handleTextChange}
                  // rows={3}
                />
              </Form.Group>
              <Form.Select
                className="formOptionTopic"
                value={newForm.topic}
                onChange={handleSelectChange}
                name="topic"
                aria-label="Default select example"
                id="topic"
              >
                <option className="formTopic">Selec A Topic</option>
                <option value="Lifestyle">Lifestyle</option>
                <option value="New parenting">New parenting</option>
                <option value="Feeling thoughtful">Feeling thoughtful</option>
                <option value="Products">Products</option>
                <option value="Mental health">Mental health</option>
                <option value="Information resources">
                  Information resources
                </option>
                <option value="Finances">Finances</option>
              </Form.Select>

              <Form.Select
                className="formOptionAge"
                value={newForm.child_age}
                onChange={handleSelectChange}
                id="child_age"
                name="child_age"
                aria-label="Default select example"
              >
                <option>Child stages</option>
                <option value="All ages">All ages</option>
                <option value="0-2years">0-2years</option>
                <option value="3-5years">3-5years</option>
                <option value="6-8years">6-8years</option>
              </Form.Select>
              <label htmlFor="date" className="dateLabel">
                Todays date
              </label>

              <input
                className="formDate"
                onChange={handleSelectChange}
                value={newForm.todays_date}
                type="date"
                id="todays_date"
                name="todays_date"
                min="2023-16-02"
              />
              <Button className="formClose" onClick={handleClose}>
                Close
              </Button>
              <Button
                className="formSubmit"
                type="submit"
                onClick={handleClose}
              >
                Submit
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </div>

      {questions.map((question) => {
        return <Question key={question.id} question={question} />;
      })}
    </>
  );
}
