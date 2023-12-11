import { useNavigate } from "react-router-dom";
import { Button } from "antd";

const Quiz: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`./${id}`);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>Are you ready for a quiz?</h2>
      <Button onClick={() => handleClick(1)}>Start Quiz!</Button>
    </div>
  );
};

export default Quiz;
