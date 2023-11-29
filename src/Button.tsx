interface ButtonProps {
  label: string;
  handleClick: () => void;
  isDisabled: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, handleClick, isDisabled }) => {
  return (
    <button onClick={handleClick} disabled={isDisabled}>
      {label}
    </button>
  );
};

export default Button;
