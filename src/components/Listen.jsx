import '../styles/App.scss';
// import Tedious from './Tedious';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import StopCircleOutlinedIcon from '@mui/icons-material/StopCircleOutlined';
import PauseCircleOutlineOutlinedIcon from '@mui/icons-material/PauseCircleOutlineOutlined';

export default function Listen ({isPlaying, playMusic, stopMusic, pauseMusic}) {
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
      <h1 className="modalTitle">LISTEN</h1>
      <div className="modalText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.</div>
      {isPlaying ? 
    //   <button className="play_btn_wrapper">
    // </button>      
    <div>
    <button onClick={stopMusic} className="stopBtn musicButtons" aria-label="stop button"> <StopCircleOutlinedIcon/> </button>
    <button onClick={pauseMusic} className="pauseBtn musicButtons" aria-label="pause button"> <PauseCircleOutlineOutlinedIcon/> </button>
    </div>
    :
    <button onClick={playMusic} className="playBtn musicButtons" aria-label="play button"> <PlayCircleOutlineIcon/> </button>
    //   <button className="play_btn_wrapper">
    // </button>
    }
      </>
  );
}