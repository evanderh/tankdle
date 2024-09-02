import { GameStatus } from "./Game";

interface Props {
  imageUrl: string;
  attribution?: string,
  status: GameStatus,
}

const ImageDisplay = ({ imageUrl, attribution, status }: Props) => {
  return (
    <div className="image-display">
      <img
        width={240}
        src={imageUrl}
        alt="Tank of the day"
      />
      {attribution && status !== 'playing' && (
        <p dangerouslySetInnerHTML={{ __html: attribution }} />
      )}
    </div>
  );
};

export default ImageDisplay;
