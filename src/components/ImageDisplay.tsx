import { Box } from "@mui/material";
import { GameStatus } from "./Game";

interface Props {
  imageUrl: string;
  attribution?: string,
  status: GameStatus,
}

const ImageDisplay = ({ imageUrl, attribution, status }: Props) => {
  return (
    <div className="image-display">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          width: '100%',
          height: { xs: '100%', sm: '30vh' }// Set the container height or a specific height
        }}
      >
        <img
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
          }}
          src={imageUrl}
          alt="Tank of the day"
        />
      </Box>
      {attribution && status !== 'playing' && (
        <p dangerouslySetInnerHTML={{ __html: attribution }} />
      )}
    </div>
  );
};

export default ImageDisplay;
