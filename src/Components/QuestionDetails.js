import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function QuestionDetails() {

const API = process.env.REACT_APP_API_URL;

const {id} = useParams();
const [allAnswers, setAllAnswers] = useState([]);

useEffect(() => {
  axios.get(`${API}questions/${id}/answers`)
  .then((res) => {
    console.log(res.data)
    setAllAnswers(res.data)})
},[API, id])



return <h4>displays questions and responses</h4>;






}
