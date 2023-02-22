import axios from "axios";

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const API = process.env.REACT_APP_API_URL;

export default function QuestionEditForm() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [editQuestion, setEditQuestion] = useState({
    body: "",
    name: "",
    todays_date: "",
    topic: "",
    child_age: "",
  });

  const updateQuestion = (editQuestion) => {
    axios
      .put(`${API}/questions/${id}`, editQuestion)
      .then(
        () => {
          navigate(`/questions/${id}/answers`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setEditQuestion({ ...editQuestion, [event.target.id]: event.target.value });
  };

  const handleSelectChange = (event) => {
    setEditQuestion({ ...editQuestion, [event.target.id]: event.target.value });
  };

  console.log(editQuestion);

  useEffect(() => {
    axios.get(`${API}/questions/${id}`).then(
      (response) => setEditQuestion(response.data),
      (error) => navigate(`/not-found`)
    );
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateQuestion(editQuestion, id);

    console.log(editQuestion);
  };
  return (
    <div className="container">
      <Form onSubmit={handleSubmit} type="submit">
        <Form.Group className="mb-3" controlId="name">
          <Form.Label className="formName">Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter your name"
            autoFocus
            value={editQuestion.name}
            onChange={handleTextChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="body">
          <Form.Label className="formBody">Type anything</Form.Label>
          <Form.Control
            type="text"
            placeholder="..."
            name="body"
            autoFocus
            value={editQuestion.body}
            onChange={handleTextChange}
          />
        </Form.Group>

        <Form.Select
          className="formOptionTopic"
          value={editQuestion.topic}
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
          <option value="Information resources">Information resources</option>
          <option value="Finances">Finances</option>
        </Form.Select>

        <Form.Select
          className="formOptionAge"
          value={editQuestion.child_age}
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
          value={editQuestion.todays_date}
          type="date"
          id="todays_date"
          name="todays_date"
          min="2023-16-02"
        />
        <Button className="formSubmit" type="submit">
          Edit
        </Button>
      </Form>
      <Link to={`/questions/${id}/answers`}>
        {" "}
        <Button className="backEditButton">Back </Button>
      </Link>
    </div>
  );
}
