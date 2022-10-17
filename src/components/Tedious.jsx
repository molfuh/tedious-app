import React from 'react';
// import { useState } from 'react'
// import TediousBgImg from './TediousBgImg.jpg';
// import Tilt from 'react-tilt';
// import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Draggable from 'react-draggable';
import { ReactComponent as TikTokIcon } from '../images/tiktok.svg';
// import styled from 'styled-components';

export default function Tedious() {
  return (
    <>
      <div className="appWrapper">
        <div className="tedious_bg">
          <span className="found_me">
              you found me! :D
          </span>
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
              {/* <span className="ted_bg_image"></span> */}
              <span className="background-circle">
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
    </>
  )
}
