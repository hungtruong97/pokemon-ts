import { useParams } from "react-router-dom";

const QuizQuestion: React.FC = () => {
  const { id } = useParams();

  return <div>Question {id} </div>;
};

export default QuizQuestion;
