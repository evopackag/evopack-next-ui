import "./UnderlinedText.css";

interface IProps {
  children: string;
}

const UnderlinedText = ({ children }: IProps) => {
  return <span className="underlinedText">{children}</span>;
};

export default UnderlinedText;
