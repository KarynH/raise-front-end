import Question from "./Question";
import axios from "axios";

import { useEffect, useState } from "react";


export default function Questions() {

  const API = process.env.REACT_APP_API_URL;
  const [questions, setQuestions] = useState([]);

    useEffect(() => {
      axios.get(`${API}questions`).then((res) => {
        console.log(res.data)
        setQuestions(res.data)
      }).catch((err) => console.err)
    }, [API])

  return (
 <>
 <h3 className="headingRecent">recent</h3>
 {
  questions.map((question) => {
    return <Question key={question.id} question={question} />
  })
 }
 </>
  );
}
