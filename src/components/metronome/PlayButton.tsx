import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';


interface PlayButtonProps {
    onClick: () => void;
    playing: boolean;
}

const PlayButton: React.FC<PlayButtonProps> = ({ onClick, playing }) => {
    return (
        <Box>
            <Fab color="primary" aria-label="play" onClick={onClick}>
                {playing ? <PauseIcon /> : <PlayArrowIcon />}
            </Fab>
        </Box>
    );
}

export default PlayButton;