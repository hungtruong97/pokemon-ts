import { useState, useEffect } from "react";
import { pokemonQuiz } from "../data/quizData";
import { useNavigate } from "react-router-dom";
import QuizQuestionTemplate from "./QuizQuestionTemplate";
import { Button, Modal } from "antd";
import usePokemonData from "../hook/usePokemonData";

const QuizQuestion: React.FC = () => {
  //for modal component
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  //for component
  const navigate = useNavigate();
  const [questionIndex, setQuestionIndex] = useState<number>(1);
  const [questionId, setQuestionID] = useState<number>(0);
  const [questionList, setQuestionList] = useState<number[]>([]);
  const [correctAnswerNumber, setCorrectAnswerNumber] = useState<number>(0);

  //Function to get pokemon image from pokemon name
  const modifyPokemonName = (name: string) => {
    const apiName = name
      .replace(".", "")
      .replace("'", "")
      .replace(" ", "-")
      .toLowerCase();
    return apiName;
  };

  //Custom hook for fetching pokemon data
  const { pokemon } = usePokemonData(
    questionId ? modifyPokemonName(pokemonQuiz[questionId - 1]?.pokemon) : ""
  );

  //Function to generate a random id to fetch question data
  const generateRandomQuestionId = () => {
    const numberOfQuestions = 50;
    let randomQuestionId: number;
    do {
      randomQuestionId = Math.floor(Math.random() * numberOfQuestions) + 1;
    } while (questionList.includes(randomQuestionId));
    setQuestionID(randomQuestionId);
    setQuestionList((prevList) => [...prevList, randomQuestionId]);
  };

  useEffect(() => {
    generateRandomQuestionId();
  }, [questionIndex]);

  //Function to check answer
  const checkAnswer = (answer: string) => {
    const question = pokemonQuiz.find((question) => question.id === questionId);
    if (question?.answer === answer) {
      setCorrectAnswerNumber((prev) => prev + 1);
    }
  };

  //Function to handle next button
  const handleNext = (value: string) => {
    checkAnswer(value);
    const id = questionIndex + 1;
    setQuestionIndex(id);
    navigate(`/quiz/${id}`);
  };

  //Fucntion to handle Check result button
  const handleCheckResult = (value: string) => {
    checkAnswer(value);
    showModal();
  };

  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
      }}
    >
      <QuizQuestionTemplate
        id={questionId}
        index={questionIndex}
        img={pokemon?.img || "/src/assets/pngwing.com.png"}
        handleNext={handleNext}
        handleCheckResult={handleCheckResult}
      />
      {open && (
        <Modal
          open={open}
          title="Title"
          onOk={handleCancel}
          onCancel={handleCancel}
          footer={[
            <Button
              type="primary"
              key="quiz"
              onClick={() => {
                handleCancel;
                navigate("/quiz");
              }}
            >
              Go to Quiz page
            </Button>,
            <Button
              key="try again"
              type="default"
              onClick={() => {
                setOpen(false);
                setQuestionIndex(1);
                setQuestionList([]);
                setCorrectAnswerNumber(0);
                navigate(`/quiz/${questionIndex}`);
              }}
            >
              Try Again
            </Button>,
          ]}
        >
          <p>You have answered {correctAnswerNumber} questions correctly.</p>
        </Modal>
      )}
    </div>
  );
};

export default QuizQuestion;
