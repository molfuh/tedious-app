import '../styles/App.scss';
// import Tedious from './Tedious';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import StopCircleOutlinedIcon from '@mui/icons-material/StopCircleOutlined';
import PauseCircleOutlineOutlinedIcon from '@mui/icons-material/PauseCircleOutlineOutlined';

export default function Listen ({isPlaying, playMusic, stopMusic, pauseMusic}) {
  return (
    <>
      {isPlaying ? 
        <div>
        <button onClick={stopMusic} className="stopBtn musicButtons" aria-label="stop button"> <StopCircleOutlinedIcon/></button>
        <button onClick={pauseMusic} className="pauseBtn musicButtons" aria-label="pause button"> <PauseCircleOutlineOutlinedIcon/></button>
        </div>
        :
        <button onClick={playMusic} className="playBtn musicButtons" aria-label="play button"> <PlayCircleOutlineIcon/></button>
        }
    </>
  );
}