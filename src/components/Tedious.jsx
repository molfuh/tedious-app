import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Draggable from 'react-draggable';
import { ReactComponent as TikTokIcon } from '../images/tiktok.svg';
import React from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import About from './About';
import Listen from './Listen';
import Contact from './Contact';

// export default function Tedious() {
class Tedious extends React.Component {
//   state = {
//     left: 0,
//     top: 0
// }
constructor(props) {
  super(props);
  this.state = {
    openModalAbout: false,
    openModalListen: false,
    openModalContact: false,
    isPlaying: false
  };
  this.audio = new Audio("/Lullaby.mp3");
  this.handleClickAbout = this.handleClickAbout.bind(this);
  this.handleClickListen = this.handleClickListen.bind(this);
  this.handleClickContact = this.handleClickContact.bind(this);
  this.onCloseModal = this.onCloseModal.bind(this);
  this.playMusic = this.playMusic.bind(this);
  this.stopMusic = this.stopMusic.bind(this);
  this.pauseMusic = this.pauseMusic.bind(this);
}

// componentDidMount() {
//     document.addEventListener("mousemove", this.handleCursor);
// }
// componentWillUnmount() {
//   // Make sure to remove the DOM listener when the component is unmounted.
//   document.removeEventListener("mousemove", this.handleCursor);
// }
// handleCursor = (e) => {
//     this.setState({left: e.pageX, top: e.pageY});
//     console.log(this.state.left, this.state.right);
// }
  // const cursor = document.getElementsByClassName('cursor')[0];
  // cursor.setAttribute('style','top:'+e.pageY+'px; left:'+ e.pageX+'px;');
  // componentDidMount = () => {
    // var audio = new Audio("/Lullaby.mp3");
    // audio.src = "/Lullaby.mp3"
//  }
  
  handleClickAbout = e => {
    e.preventDefault();
    this.setState({openModalAbout : true});
  }
  handleClickListen = e => {
    e.preventDefault();
    this.setState({openModalListen : true});
  }
  handleClickContact = e => {
    e.preventDefault();
    this.setState({openModalContact : true});
  }
  playMusic = () => {
    // e.preventDefault();
    // let audio = new Audio("/Lullaby.mp3");
    this.audio.play();
    this.setState({isPlaying : true});
  }
  stopMusic = () => {
    // e.preventDefault();
    // let audio = new Audio("/Lullaby.mp3");
    this.audio.pause();
    this.audio.currentTime = 0;
    this.setState({isPlaying : false});
  }
  pauseMusic = () => {
    this.audio.pause();
    this.setState({isPlaying : false});
  }
  onCloseModal = () => {
    // e.preventDefault();
    // console.log('yes');
    this.setState({
      openModalAbout: false,
      openModalListen: false,
      openModalContact: false
    });
  }
 render() {
  // function openBio(open) {
  //   console.log('yes');
  //   // this.setState({open: true});
  // }


  return (
    <>
      <div className="appWrapper">
        <div className="tedious_bg">
          <span className="found_me">
              you found me! :D
          </span>
         <div className="buttonsIconsWrapper">
              <button onClick={this.handleClickAbout} className="bio buttons"><span>About</span></button>
              <button onClick={this.handleClickListen} className="listen buttons"><span>Listen</span></button>
              <button onClick={this.handleClickContact} className="contact buttons"><span>Contact</span></button>
            {/* <button href="#" clbuttonss="buttons">
              <span>About</span>
              <svg width="13px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </button> */}
            {/* </button> */}
          </div>
         <div className="socialMediaIconsWrapper">
            <a href="https://www.youtube.com/channel/UC7SRMEAzVHVG5gHimUlEHDg" target="_blank" rel="noreferrer">
              <YouTubeIcon className="socialMediaIcons" />
            </a>
            <a href="https://www.tiktok.com/@itstediousmusic?lang=en" target="_blank" rel="noreferrer">
              <TikTokIcon className="socialMediaIcons" />
            </a>
            <a href="https://www.instagram.com/itstediousmusic/" target="_blank" rel="noreferrer">
              <InstagramIcon className="socialMediaIcons" />
            </a>
          </div>
          <Draggable>
            <span className="background-circle-wrapper">
              {/* <span className="background-circle" style={{left: this.state.left, top: this.state.top}} > */}
              <span className="background-circle" >
                <span className="T-Side" />
                <span className="T-Top" />
                <div className="HorizontalLinesWrapper">
                  <span className="HorizontalLines"></span>
                  <span className="HorizontalLines"></span>
                  <span className="HorizontalLines"></span>
                  <span className="HorizontalLines"></span>
                  <span className="HorizontalLines"></span>
                </div>
                <div className="LettersStyleWrapper">
                  <span className="E LettersStyle">E</span>
                  <span className="D LettersStyle">D</span>
                  <span className="I LettersStyle">I</span>
                  <span className="O LettersStyle">O</span>
                  <span className="U LettersStyle">U</span>
                  <span className="S LettersStyle">S</span>
                </div>
                <span className="live_ted_text">live tediously</span>
              </span>
            </span>
          </Draggable>
          <div className="out_soon">"it's okay to be not okay" - out soon!</div>
        </div>
      </div>
      <Modal closeOnOverlayClick={true} closeOnEsc={true} center={true} open={this.state.openModalAbout} onClose={this.onCloseModal}><About/></Modal>
      <Modal closeOnOverlayClick={true} closeOnEsc={true} center={true} open={this.state.openModalListen} onClose={this.onCloseModal}><Listen isPlaying={this.state.isPlaying} playMusic={this.playMusic} stopMusic={this.stopMusic} pauseMusic={this.pauseMusic}/></Modal>
      <Modal closeOnOverlayClick={true} closeOnEsc={true} center={true} open={this.state.openModalContact} onClose={this.onCloseModal}><Contact/></Modal>
    </>
  )
}
}

export default Tedious;