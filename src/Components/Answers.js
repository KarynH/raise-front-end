import axios from "axios";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Answer from "./Answer";

export default function Answers({ formatDate, refreshPage }) {
  
  const API = process.env.REACT_APP_API_URL;

  const [answers, setAnswers] = useState([]);

  const { id } = useParams();

  const [toggleForm, setToggleForm] = useState(false);
  const [comment, setComment] = useState({
    question_id: id,
    response: "",
    todays_date: "",
    provider_type: "",
  });

  useEffect(() => {
    axios.get(`${API}/questions/${id}/answers`).then((res) => {
      console.log(res.data);
      setAnswers(res.data);
    });
  }, [API, id]);

  const handleTextChange = (event) => {
    setComment({ ...comment, [event.target.id]: event.target.value });
  };

  const handleSelectChange = (event) => {
    console.log(event.target.value);
    setComment({ ...comment, [event.target.id]: event.target.value });
  };

  console.log(comment);

  const handleSubmit = (event, comment) => {
    event.preventDefault();
    axios
      .post(`${API}/questions/${id}/answers`, comment)
      .then(
        () => {
          refreshPage();
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  return (
    <div className="responseCards">
      <Button
        className="comment"
        type="submit"
        onClick={() => setToggleForm(!toggleForm)}
      >
        Comment{" "}
      </Button>

      {toggleForm ? (
        <Form onSubmit={handleSubmit} type="submit">
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              name="response"
              placeholder="comment"
              autoFocus
              value={comment.response}
              onChange={handleTextChange}
            />

            <label htmlFor="date" className="dateLabel">
              Todays date
            </label>

            <input
              className="formDate"
              onChange={handleSelectChange}
              value={comment.todays_date}
              type="date"
              id="todays_date"
              name="todays_date"
              min="2023-16-02"
            />
            <Form.Select
              className="formOptionTopic"
              value={comment.provider_type}
              onChange={handleSelectChange}
              name="provider_type"
              aria-label="Default select example"
              id="provider_type"
            >
              <option className="formTopic">Are you a ?</option>
              <option value="Parent">Parent</option>
              <option value="Caregiver">Caregiver</option>
            </Form.Select>
          </Form.Group>
          <input type="submit" />
        </Form>
      ) : null}

      {!answers.length ? (
        <p>𝟎 comments</p>
      ) : (
        answers.map((answer) => {
          return (
            <Answer key={answer.id} answer={answer} formatDate={formatDate} />
          );
        })
      )}
    </div>
  );
}
