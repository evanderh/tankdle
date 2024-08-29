interface Props {
  imageUrl: string;
}

const ImageDisplay = ({ imageUrl }: Props) => {
  return (
    <div className="image-display">
      <img
        width={640}
        src={imageUrl}
        alt="Tank of the day"
      />
    </div>
  );
};

export default ImageDisplay;
