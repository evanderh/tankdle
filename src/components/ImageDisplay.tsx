interface Props {
  imageUrl: string;
  attribution?: string
}

const ImageDisplay = ({ imageUrl, attribution }: Props) => {
  return (
    <div className="image-display">
      <img
        width={640}
        src={imageUrl}
        alt="Tank of the day"
      />
      {attribution && (
        <p dangerouslySetInnerHTML={{ __html: attribution }} />
      )}
    </div>
  );
};

export default ImageDisplay;
