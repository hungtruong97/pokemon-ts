import { pokemonQuiz } from "../quiz/quizData";
import { Button, Radio, Space } from "antd";
import { useState } from "react";
import type { RadioChangeEvent } from "antd";

interface QuizQuestionProps {
  id: number;
  index: number;
  img: string;
  handleNext: (item: string) => void;
  handleCheckResult: (item: string) => void;
}

const QuizQuestionTemplate: React.FC<QuizQuestionProps> = ({
  id,
  index,
  img,
  handleNext,
  handleCheckResult,
}) => {
  const [value, setValue] = useState<string>("");

  //onChange function for radio button
  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

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
      <h4>Question {index}:</h4>
      <p>{question?.question}</p>
      <img
        src={img}
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

      {index < 5 ? (
        <Button
          disabled={value ? false : true}
          type="primary"
          style={{ width: 100 }}
          onClick={() => handleNext(value)}
        >
          Next
        </Button>
      ) : (
        <Button
          disabled={value ? false : true}
          type="primary"
          onClick={() => handleCheckResult(value)}
        >
          Check result
        </Button>
      )}
    </div>
  );
};

export default QuizQuestionTemplate;
