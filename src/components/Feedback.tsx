interface Props {
  feedback: string;
}

const Feedback = ({ feedback }: Props) => {
  return <div className="feedback">{feedback}</div>;
};

export default Feedback;