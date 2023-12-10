import { useState, useEffect } from "react";
import { pokemonQuiz } from "../quiz/quizData";
import { useNavigate } from "react-router-dom";
import { Radio, Space, Button } from "antd";
import type { RadioChangeEvent } from "antd";
import axios from "axios";

const QuizQuestion: React.FC = () => {
  const navigate = useNavigate();
  const [questionIndex, setQuestionIndex] = useState<number>(1);
  const [questionId, setQuestionID] = useState<number>(0);
  const [value, setValue] = useState<string>("");
  const [questionList, setQuestionList] = useState<number[]>([]);
  const [correctAnswerNumber, setCorrectAnswerNumber] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [quizImg, setQuizImg] = useState<string>("");

  //onChange function for radio button
  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

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
  };

  //Function to handle next button
  const handleNext = () => {
    checkAnswer(value);
    const id = questionIndex + 1;
    setQuestionIndex(id);
    navigate(`/quiz/${id}`);
    setValue("");
    setQuizImg("");
  };

  //Fucntion to handle Check result button
  const handleCheckResult = () => {
    checkAnswer(value);
    setShowResult(true);
  };

  //Function to generate question
  const generateQuestion = (id: number) => {
    const question = pokemonQuiz.find((question) => question.id === id);
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: 500,
          gap: 20,
        }}
      >
        <h4>Question {questionIndex}:</h4>
        <p>{question?.question}</p>
        <img
          src={quizImg}
          style={{
            width: 200,
          }}
        />
        <Radio.Group onChange={onChange} value={value}>
          <Space direction="vertical">
            {question?.options.map((option: string) => (
              <Radio value={option}>{option}</Radio>
            ))}
          </Space>
        </Radio.Group>
        {questionIndex < 5 ? (
          <Button type="primary" style={{ width: 100 }} onClick={handleNext}>
            Next
          </Button>
        ) : (
          <Button type="primary" onClick={handleCheckResult}>
            Check result
          </Button>
        )}
      </div>
    );
  };

  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
      }}
    >
      {generateQuestion(questionId)}
      {showResult && (
        <div>
          <p>You have answered {correctAnswerNumber} questions correctly.</p>
        </div>
      )}
    </div>
  );
};

export default QuizQuestion;
