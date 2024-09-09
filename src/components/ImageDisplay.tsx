import { GameStatus } from "./Game";

interface Props {
  imageUrl: string;
  attribution?: string,
  status: GameStatus,
}

const ImageDisplay = ({ imageUrl, attribution, status }: Props) => {
  return (
    <>
      <img
        style={{
          maxWidth: '100%',
          maxHeight: '40vh',
          objectFit: 'contain',
        }}
        src={imageUrl}
        alt="Tank of the day"
      />
      {attribution && status !== 'playing' && (
        <p
          style={{ fontSize: '0.75rem' }}
          dangerouslySetInnerHTML={{ __html: attribution }}
        />
      )}
    </>
  );
};

export default ImageDisplay;
