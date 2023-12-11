import { useState, useEffect } from "react";
import { pokemonQuiz } from "../quiz/quizData";
import { useNavigate } from "react-router-dom";
import QuizQuestionTemplate from "./QuizQuestionTemplate";
import axios from "axios";

const QuizQuestion: React.FC = () => {
  const navigate = useNavigate();
  const [questionIndex, setQuestionIndex] = useState<number>(1);
  const [questionId, setQuestionID] = useState<number>(0);
  const [questionList, setQuestionList] = useState<number[]>([]);
  const [correctAnswerNumber, setCorrectAnswerNumber] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [quizImg, setQuizImg] = useState<string>("");

  useEffect(() => {
    //Function to get pokemon image from pokemon name
    const getPokemonImgFromName = async (name: string) => {
      const apiName = name
        .replace(".", "")
        .replace("'", "")
        .replace(" ", "-")
        .toLowerCase();
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${apiName}`
      );
      return response.data.sprites.other[`official-artwork`].front_default;
    };

    //Function to generate a random id to fetch question data
    const generateRandomQuestionIdAndImage = async () => {
      const numberOfQuestions = 50;
      let randomQuestionId: number;
      do {
        randomQuestionId = Math.floor(Math.random() * numberOfQuestions) + 1;
      } while (questionList.includes(randomQuestionId));
      const question = pokemonQuiz.find((q) => q.id === randomQuestionId);
      if (question) {
        const imgUrl = await getPokemonImgFromName(question.pokemon);
        setQuizImg(imgUrl);
        setQuestionID(randomQuestionId);
        setQuestionList((prevList) => [...prevList, randomQuestionId]);
      }
    };

    generateRandomQuestionIdAndImage();
  }, [questionIndex]);

  //Function to check answer
  const checkAnswer = (answer: string) => {
    const question = pokemonQuiz.find((question) => question.id === questionId);
    if (question?.answer === answer) {
      setCorrectAnswerNumber((prev) => prev + 1);
    }
    console.log(correctAnswerNumber);
  };

  //Function to handle next button
  const handleNext = (value: string) => {
    checkAnswer(value);
    const id = questionIndex + 1;
    setQuestionIndex(id);
    navigate(`/quiz/${id}`);
    setQuizImg("");
  };

  //Fucntion to handle Check result button
  const handleCheckResult = (value: string) => {
    checkAnswer(value);
    setShowResult(true);
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
        img={quizImg}
        handleNext={handleNext}
        handleCheckResult={handleCheckResult}
      />
      {showResult && (
        <div>
          <p>You have answered {correctAnswerNumber} questions correctly.</p>
        </div>
      )}
    </div>
  );
};

export default QuizQuestion;
