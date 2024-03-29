import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Draggable from 'react-draggable';
// import { ReactComponent as TikTokIcon } from '../images/tiktok.svg';
import React from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import About from './About';
import Listen from './Listen';
import Contact from './Contact';

class Tedious extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    openModalAbout: false,
    openModalListen: false,
    openModalContact: false,
    isPlaying: false
  };
  this.audio = new Audio("/TEDIOUS - It's Okay To Be Not Okay.mp3");
  this.handleClickAbout = this.handleClickAbout.bind(this);
  this.handleClickListen = this.handleClickListen.bind(this);
  this.handleClickContact = this.handleClickContact.bind(this);
  this.onCloseModal = this.onCloseModal.bind(this);
  this.playMusic = this.playMusic.bind(this);
  this.stopMusic = this.stopMusic.bind(this);
  this.pauseMusic = this.pauseMusic.bind(this);
}
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
    this.audio.play();
    this.setState({isPlaying : true});
  }
  stopMusic = () => {
    this.audio.pause();
    this.audio.currentTime = 0;
    this.setState({isPlaying : false});
  }
  pauseMusic = () => {
    this.audio.pause();
    this.setState({isPlaying : false});
  }
  onCloseModal = () => {
    this.audio.pause();
    this.audio.currentTime = 0;
    this.setState({
      openModalAbout: false,
      openModalListen: false,
      openModalContact: false
    });
  }
  render() {
    return (
      <>
        <div className="appWrapper">
          <div className="tedious_bg">
            <span className="found_me">
              <Listen isPlaying={this.state.isPlaying} playMusic={this.playMusic} stopMusic={this.stopMusic} pauseMusic={this.pauseMusic}/>
            </span>
            <div className="header">
              <div className="buttonsIconsWrapper">
                <button onClick={this.handleClickAbout} className="bio buttons"><span>About</span></button>
                {/* <button onClick={this.handleClickListen} className="listen buttons"><span>Listen</span></button> */}
                <button onClick={this.handleClickContact} className="contact buttons"><span>Contact</span></button>
              </div>
              <div className="socialMediaIconsWrapper">
                {/* <a href="https://www.youtube.com/channel/UC7SRMEAzVHVG5gHimUlEHDg" target="_blank" rel="noreferrer">
                  <YouTubeIcon className="socialMediaIcons" />
                </a>
                <a href="https://www.tiktok.com/@itstediousmusic?lang=en" target="_blank" rel="noreferrer">
                  <TikTokIcon className="socialMediaIcons" />
                </a> */}
                <a href="https://www.instagram.com/positivelytedious/" target="_blank" rel="noreferrer" aria-label="link to instagram profile for TEDIOUS">
                  <InstagramIcon className="socialMediaIcons" />
                </a>
              </div>
            </div>
            <Draggable>
              <span className="background-circle-wrapper">
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
                  <div className="LettersStyleWrapper" aria-hidden="true">
                    <span className="E LettersStyle">E</span>
                    <span className="D LettersStyle">D</span>
                    <span className="I LettersStyle">I</span>
                    <span className="O LettersStyle">O</span>
                    <span className="U LettersStyle">U</span>
                    <span className="S LettersStyle">S</span>
                  </div>
                  <span className="live_ted_text" aria-hidden="true">POSITIVELY TEDIOUS</span>
                </span>
              </span>
            </Draggable>
          <div className="out_soon">"It's Okay To Be Not Okay" - <a href="https://linktr.ee/positivelytedious" target="_blank" rel="noreferrer">Out now!</a></div>
        </div>
      </div>
      <Modal closeOnOverlayClick={true} closeOnEsc={true} center={true} open={this.state.openModalAbout} onClose={this.onCloseModal}><About/></Modal>
      <Modal closeOnOverlayClick={true} closeOnEsc={true} center={true} open={this.state.openModalListen} onClose={this.onCloseModal}><Listen isPlaying={this.state.isPlaying} playMusic={this.playMusic} stopMusic={this.stopMusic} pauseMusic={this.pauseMusic}/></Modal>
      <Modal closeOnOverlayClick={true} closeOnEsc={true} center={true} open={this.state.openModalContact} onClose={this.onCloseModal} className="contactModal"><Contact/></Modal>
      </>
    )
  }
}

export default Tedious;