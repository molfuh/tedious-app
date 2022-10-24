import '../styles/App.scss';
// import Tedious from './Tedious';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import StopCircleIcon from '@mui/icons-material/StopCircle';

export default function Listen ({isPlaying, playMusic, stopMusic}) {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       isPlaying: false
    //     }
    //     this.start = this.start.bind(this);
    // }
      
    // let audio = new Audio("/Lullaby.mp3");
    
    // const start = () => {
    //     audio.play();
    // }

    return (
      <>
      {isPlaying ? 
    //   <button className="play_btn_wrapper">
    // </button>      
    <button onClick={stopMusic} className="stopBtn" aria-label="stop button"> stop </button>
    :
    <button onClick={playMusic} className="playBtn" aria-label="play button"> play </button>
    //   <button className="play_btn_wrapper">
    // </button>
    }
      </>
  );
}