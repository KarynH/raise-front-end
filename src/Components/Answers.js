import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Answer from "./Answer";

export default function Answers({formatDate}) {
    const API = process.env.REACT_APP_API_URL;

    const [answers, setAnswers] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        axios.get(`${API}questions/${id}/answers`).then((res) =>{
            console.log(res.data);
            setAnswers(res.data);
        });
    },[API, id]);

    return( 
        <div className="responseCards">
            {answers.map((answer) => {
                return <Answer key={answer.id} answer={answer} formatDate={formatDate} />
            })}
        </div>
    )
}