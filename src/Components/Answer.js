import Card from "react-bootstrap/Card";

export default function Answers({ answer, formatDate }) {
  return (
    <>
      <Card className="responseCard2">
        <Card.Body>
          <p className="responseDetails">
            {formatDate(answer.todays_date)} đ {"īš"}
            {answer.provider_type}
          </p>
          {answer.response}
        </Card.Body>
      </Card>
    </>
  );
}
